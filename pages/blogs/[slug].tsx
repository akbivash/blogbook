import { urlFor, client } from "../../sanity";
import { Comment, InputData, Post, Props, User } from "../../typing";
import { GetStaticProps } from "next";
import { PortableText, PortableTextBlockComponent } from "@portabletext/react";
import { RichTextComponent } from "@/components/RichTextComponent";
import Image from "next/image";
import { FormEvent, useContext, useState } from "react";
import axios from "axios";
import moment from "moment";
import Modal from "@/components/Modal";
import Link from "next/link";
import { useGlobalContext } from "@/context/AppContext";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";

function Blog({ post }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isModalOpen, setIsModalOpen } = useGlobalContext();
  const [user, setUser] = useState<User>();
  const [comments, setComments] = useState([]);
const {data:session} = useSession()

  const [InputData, setInputData] = useState<InputData>({
    _id: post[0]._id,
    email: session?.user?.email,
    comment: "",
    image:session?.user?.image
  });


  useEffect(() => {
  handleRefresh()
  
    return () => {
      setIsModalOpen(false);
    };
  }, []);

 

  const handleRefresh = async () => {
    const res = await axios.get(`/api/getComment?postId=${post[0]._id}`);
          const data = await res.data;
          setComments(data);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (session) {
      try {
        setIsSubmitting(true);
        const commentToast = toast.loading("Posting Comment...");
    InputData.email = session?.user?.email,
InputData.image = session?.user?.image
        await axios.post("/api/createComment", InputData);
        console.log("ok");
        setIsSubmitting(false);
        InputData.comment = "";
        toast.success("Comment posted", {
          id: commentToast,
        });
       
        setTimeout(async() => {
          const res = await axios.get(`/api/getComment?postId=${post[0]._id}`);
          const data = await res.data;
          setComments(data);
          handleRefresh()
     
        },1000)

      } catch (err) {
        setIsSubmitting(false);
        console.log(err);
        toast.error("Failed");
      }
    } else {
      setIsModalOpen(true);
    }
  }
  async function handleDelete(id: string) {
    try {
      const deleteToast = toast.loading("Deleting");

   const res =   await fetch(`/api/deleteComment`, {
        method: "DELETE",
        body: JSON.stringify({
          commentId: id,
        }),
      });
      toast.success("Deleted succesfully...", {
        id: deleteToast,
      });
    
      setTimeout(async() => {
        const res = await axios.get(`/api/getComment?postId=${post[0]._id}`);
        const data = await res.data;
        setComments(data);
        handleRefresh()
   
      },1000)

    } catch (err) {
      console.log(err);
      toast.error("Failed");
    }
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
      email: user?.emailId,
    }));
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div
        className={`${
          isModalOpen
            ? " w-full p-3 mx-auto max-w-[900px] z-10 overflow-y-hidden blur-sm  "
            : " w-full p-3 mx-auto max-w-[900px] z-10 "
        } `}
      >
        <Image
          src={urlFor(post[0].mainImage).url()!}
          alt=""
          width={1000}
          height={500}
          className="w-full max-w-[900px]  h-[400px] object-contain"
        />
        <article className="my-4 text-xl">
          <h1 className="text-2xl ">{post[0].title}</h1>
          <div className="my-4 grid gap-4">
            <img
              src={urlFor(post[0].author.image).url()}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <p>
              Blog Post by{" "}
              <span className="text-green-600">{post[0].author.name}</span>
              {post[0]._createdAt !== null ||
                (undefined && (
                  <span>
                    {" "}
                    Published at {new Date(post[0]._createdAt).toLocaleString()}
                  </span>
                ))}
            </p>
            <PortableText value={post[0].body} components={RichTextComponent} />
          </div>
        </article>
        {/* comment section  */}
        <hr className="border-red-300 py-4" />

        <div className="w-full max-w-[400px] mx-auto mt-10">
          <h2 className="text-xl ">Leave a comment !</h2>
          <form action="" className="mt-4   grid gap-4" onSubmit={handleSubmit}>
            <div className="form_control">
              <textarea
                placeholder="Nice blog.."
                name="comment"
                required
                value={InputData.comment}
                onChange={handleChange}
              ></textarea>
            </div>
            <input type="hidden" name="_id" value={InputData._id} />
            <button
              className="submit_btn disabled:opacity-[0.5]"
              disabled={isSubmitting}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="grid gap-3  py-10">
          <h2 className="text-center text-green-600 text-2xl">
            {comments.length} Comments
          </h2>
          {comments &&
            comments.map((c: Comment) => {
              const timeAgo = moment(c._createdAt).fromNow();
              return (
                <div
                  key={c._id}
                  className="shadow-sm shadow-gray-400 p-4 grid gap-4 mx-auto w-full max-w-[500px]"
                >
                  <div className="flex items-center gap-2">
                    {c.image && <Image src={c.image}   alt="image"
          width={50}
          height={50}
          className='rounded-full'
          />}
                    <span className="text-green-500 font-semibold ">
                    {c.email}{" "}
                  </span></div>
                  <p>{c.comment}</p>
                  <span className="text-gray-500 flex items-center gap-6">
                    {timeAgo}
                    {c.email === session?.user?.email && (
                      <button onClick={() => handleDelete(c._id)}>
                        <FaTrash />
                      </button>
                    )}{" "}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          children={
            <div className="grid gap-2">
              <span>Please sign in to comment</span>
              <span className="flex gap-3 justify-center">
                <button
                onClick={() => signIn()}
                  className="bg-white text-dark-default px-4 py-1 "
                >
                  Ok
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-dark-default px-4 py-1"
                >
                  Cancel
                </button>
              </span>
            </div>
          }
        />
      )}
    </>
  );
}

export default Blog;

export const getStaticPaths = async () => {
  const query = `*[_type == 'post']{
    _id,
    slug{
        current
    }
}`;

  const posts = await client.fetch(query);
  const paths = posts.map((p: Post) => {
    return {
      params: {
        slug: p.slug.current,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && slug.current == $slug]{
    _id,
      createdAt,
      title,
      author -> {
        name,
        image
      }, 
      'comments': *[
        _type == 'comment' && post._ref == ^._id 
        ],
      description,
      mainImage,
    slug,
  body
}`;
  const post = await client.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    // revalidate: 60,
  };
};

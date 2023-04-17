// async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (session) {
//       try {
//         setIsSubmitting(true);
//         const commentToast = toast.loading("Posting Comment...");
//     InputData.email = session?.user?.email,
// InputData.image = session?.user?.image
//         await axios.post("/api/createComment", InputData);
//         console.log("ok");
//         setIsSubmitting(false);
//         InputData.comment = "";
//         toast.success("Comment posted", {
//           id: commentToast,
//         });
       
//         setTimeout(async() => {
//           const res = await axios.get(`/api/getComment?postId=${post[0]._id}`);
//           const data = await res.data;
//           setComments(data);
//           handleRefresh()
     
//         },1000)

//       } catch (err) {
//         setIsSubmitting(false);
//         console.log(err);
//         toast.error("Failed");
//       }
//     } else {
//       setIsModalOpen(true);
//     }
//   }
import axios from "axios";
import { toast } from "react-hot-toast";

export async function createComment(
  e: any,
  InputData: any,
  session: any,
  setIsLoading: any,
  setIsModalOpen: any,
  setComments:any,
 handleRefresh:any
) {
  e.preventDefault();
  let commentToast
  if (session) {
    try {
      setIsLoading(true);
    commentToast = toast.loading("Posting Comment...");

      (InputData.email = session?.user?.email),
        (InputData.image = session?.user?.image);
    const res =  await axios.post("/api/createComment", InputData);
    const newComment = res.data 
console.log(newComment)
      console.log("ok");
      setIsLoading(false);
      InputData.comment = "";
      toast.success("Comment posted", {
        id: commentToast,
      });

setComments((prev:any) => [...prev, newComment])
  
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      toast.error("Failed",{
        
          id: commentToast
        
      });
    }
  } else {
    setIsModalOpen(true);
  }
}

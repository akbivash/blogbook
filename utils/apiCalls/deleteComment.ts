import { Comment } from "@/typing";
import { toast } from "react-hot-toast";

export async function deleteComment(id: string, setIsLoading:any, handleRefresh:any, setComments:any, comments:any) {
    let commentToast;
    try {
setIsLoading(true)
 commentToast = toast.loading("Deleting Comment...");

       await fetch(`/api/deleteComment`, {
        method: "DELETE",
        body: JSON.stringify({
          commentId: id,
        }),
      });
      setIsLoading(false)
      toast.success('Comment deleted', {
        id:commentToast
      })
     
      const updated = comments.filter((c:Comment) => c._id !== id)
      setComments(updated)
    } catch (err) {
      console.log(err);
    setIsLoading(false)
    toast.error('failed',{
        id:commentToast  
    })
    }
  }

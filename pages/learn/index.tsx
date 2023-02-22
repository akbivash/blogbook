import React,{useRef, useEffect, useState} from 'react'

import { db } from "@/config/firebase_config";
import { collection, getDocs } from "firebase/firestore";
import { Slider } from "@/components/Slider";



export default  function Home() {
 

  return <>
<div className="p-2   "  >
<Slider/>
</div>
  </>
}

// export async function getServerSideProps() {
//   const querySnapshot = await getDocs(collection(db, "blogs"));
//   const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   return {
//     props: { data },
//   };
// }

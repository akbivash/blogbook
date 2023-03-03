import React from 'react'
import { db } from "@/config/firebase_config";
import { collection, getDocs } from "firebase/firestore";

const index = ({data}:any) => {
  console.log(data)
  return (
    <div>index</div>
  )
}

export default index

export async function getServerSideProps() {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return {
    props: { data },
  };
}
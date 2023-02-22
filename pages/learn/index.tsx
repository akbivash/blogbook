import React,{useRef, useEffect, useState} from 'react'

import { db } from "@/config/firebase_config";
import { collection, getDocs } from "firebase/firestore";
import { Slider } from "@/components/Slider";
import {webdevSliders} from '../../assets/data'
import { dataStructureSliders } from '../../assets/data';

export default  function Home() {
 

  return <>
<div className="p-2   "  >
  <h2 className='py-4 text-2xl text-teal-600 text-center'> Web Development</h2>
<Slider data={webdevSliders}/>
</div>
<div>
  <h2 className='py-4 text-2xl text-teal-600 text-center'> Software Development</h2>
<Slider data={dataStructureSliders}/>
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

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";



import Navbar from "./Components/Navbar";




const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/User/Home");
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
 
    
    </>
  );
};

export default Page;
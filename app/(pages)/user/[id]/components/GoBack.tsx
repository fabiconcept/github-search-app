"use client"

import { useRouter } from "next/navigation"
import { FaArrowLeftLong } from "react-icons/fa6"

export default function GoBack() {
    const router = useRouter();
    return (
        <span className="cursor-pointer active:scale-90 hover:scale-125" onClick={()=>router.back()}><FaArrowLeftLong /></span>
    )
}
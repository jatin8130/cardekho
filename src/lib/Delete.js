'use client'

import { useRouter } from "next/navigation";

export default function page(props){
    const router = useRouter();
    const deleterecord=async()=>{
        let response = await fetch(`http://localhost:3000/api/car/${props.id}`,{
            method: "DELETE"
        });
        response = await response.json();
        console.log(response);
        if(response.success){
            alert("Data Deleted Successfully");
            router.push("/added");
        }
    }
    return(
        <button onClick={deleterecord} style={{padding: "4px 8px", backgroundColor: "rgb(178, 246, 43)", margin: "4px", border:"1px solid black", fontSize: "0.4cm"}}>delete</button>
    )
}
'use client'
import { useEffect, useState } from 'react';
import '../../added/form.css';
import { useRouter } from 'next/navigation';

export default function page(props){

    const router = useRouter();

    const [name, setname] = useState("");
    const[price, setprice] = useState("");
    const[type, settype] = useState("");
    const[model, setmodel] = useState("");
    const[img,setimg] = useState("");

    useEffect(()=>{
        editdata();
    }, []);
    const editdata = async()=>{
        let result = await fetch(`http://localhost:3000/api/car/${props.params.edit}`,{cache:"no-cache"});
        result = await result.json();
        if(result.success){
            setname(result.result.name);
            setprice(result.result.price);
            settype(result.result.type);
            setmodel(result.result.model);
            setimg(result.result.img);
        }
    }

    const update =async()=> {
        let result = await fetch(`http://localhost:3000/api/car/${props.params.edit}`,{
            method: "PUT",
            body:JSON.stringify({name, price, type, model, img})
        });
        result = await result.json();
        if(result.success){
            alert("Updated data on database successfully");
            router.push("/added");
        }
    }
    return(
        <div className="form">
            <h2 className="add">Update Data on Database</h2>

            <div className='formdata'>
                <span className="query">Name: </span><input className="field" value={name} type="name" onChange={(e)=>{setname(e.target.value)}} placeholder="eg: Maruti Suzuku" />
                <span className="query">Price: </span><input className="field" value={price} type="name" onChange={(e)=>{setprice(e.target.value)}} placeholder="eg: 100,000" />
                <span className="query">Type: </span><input className="field" value={type} type="name" onChange={(e)=>{settype(e.target.value)}} placeholder="eg: Car" />
                <span className="query">Model: </span><input className="field" value={model} type="name" onChange={(e)=>{setmodel(e.target.value)}} placeholder="eg: M14 titan" />
                <span className="query">Img link: </span><input className="field" value={img} type="name" onChange={(e)=>{setimg(e.target.value)}} placeholder="eg: https://google.com" />
                <button className='sub' onClick={update}>Update</button>
            </div>
        </div>
    )
}


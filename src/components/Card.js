import React, { useState } from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {
    // console.log(props.carddata)
    const [placeholder_heart,setsignalbutton]=useState(true)
    function togglebutton(ele){
        if(placeholder_heart==true){
            toast.success("Like Successfully")
            // console.log(props.carddata.id)
            // console.log(props.likedCourses)
            let a=props.likedCourses.map((ele)=>{
                return ele
            })
            a.push(props.carddata.id)
            props.setLikedCourses(a)
            console.log(props.likedCourses)
        }
        else{
            toast.warn("Like Removed")
            let a=props.likedCourses.filter((ele)=>{
                return ele!==props.carddata.id
            })
            props.setLikedCourses(a)
            console.log(props.likedCourses)
        }
        setsignalbutton(!placeholder_heart)
    }
    
  return (
    <div className='w-[300px] overflow-hidden bg-[#2A2B44] rounded-md'>
        <div className='relative'>
            <img className='w-[300px]' src={props.carddata.image.url}></img>
            <button className='bg-white rounded-full p-1 text-[30px] absolute right-2 bottom-[-10px]' onClick={togglebutton}>
                {props.likedCourses.includes(props.carddata.id)?<FcLike></FcLike>:<FcLikePlaceholder></FcLikePlaceholder>}
            </button>
        </div>
        <div className='text-white p-3 px-4 flex flex-col gap-3'>
            <h2 className='text-[19px] font-semibold leading-6'>{props.carddata.title}</h2>
            <p>{props.carddata.description.substring(0,100)}...</p>
        </div>
        
    </div>
  )
}

export default Card

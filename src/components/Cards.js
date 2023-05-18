import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import Card from './Card'
const Cards = (props) => {
    let courses=props.courses
    // console.log(courses)
  return (
    <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center gap-4 py-4'>
      {
        courses.map((ele)=>{
            return(
                <Card key={ele.id} carddata={ele} likedCourses={props.likedCourses} setLikedCourses={props.setLikedCourses}></Card>
            )
        })
      }
    </div>
  )
}

export default Cards

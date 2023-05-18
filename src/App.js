import React, { useState } from "react";
import { toast } from "react-toastify";
import Tabs from "./components/Tabs";
import Cards from "./components/Cards";
import { filterData , apiUrl } from "./data";
import { useEffect } from "react";
import app from "./App.css";
const App = () => {
  let temp=[]
  const[entiredata,setentiredatafn]=useState({})
  // keep record of entire data
  async function getCompleteData(){
    try{
      let reponse=await fetch(apiUrl)
      let data=await reponse.json()
      setentiredatafn(data.data)
      
  }
  catch(err){
      toast.error("Network Error or Server Down")
  }
  }
  getCompleteData()

  const[currentTab,setcurrentTab]=useState("All")
  const [ALL_COURSES,setCourses]=useState([])
  const [loading,setloader]=useState(false)
    async function fun(){
      setloader(true)
        try{
            let reponse=await fetch(apiUrl)
            let data=await reponse.json()
            data=data.data
            Object.values(data).forEach((ele)=>{
                ele.forEach((obj)=>{
                    temp.push(obj)
                })
            })
            
            setCourses(temp)
            
        }
        catch(err){
            toast.error("Network Error or Server Down")
        }
        setloader(false)
    }
    useEffect(()=>{
        fun()
    },[])
    function tabhandle(clickedTabName){
      if(currentTab===clickedTabName){
        return
      }
      
      if (clickedTabName in entiredata){
        // one of the tabs (not all)
        console.log(clickedTabName)
        // console.log(entiredata)
        console.log(entiredata[clickedTabName])
        setCourses(entiredata[clickedTabName])
        setcurrentTab(clickedTabName)
      }
      else{
        // all is clicked
        let temp=[]
        setcurrentTab("All")
        Object.values(entiredata).forEach((ele)=>{
          ele.forEach((obj)=>{
              temp.push(obj)
          })
      })
        setCourses(temp)
      }
    }
    const [likedCourses,setLikedCourses]=useState([])
    
  return(
    <div className="wrapper min-h-screen w-screen bg-[#4A4E69] ">
          <div className="bg-[#22223B] py-3">
            <nav className='text-center text-white text-[30px] font-bold'>Top Courses</nav>
          </div>
          
          <Tabs names={filterData} tabfn={tabhandle} currentTab={currentTab}></Tabs>

          
          {loading ?<div className="my-32 flex flex-col gap-5 justify-center items-center">
            <span class="loader"></span>
            <p className='text-black text-[22px] font-semibold'>Loading ...</p>
          </div>:<Cards courses={ALL_COURSES} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Cards>}
          
    </div>
  )
  
}

export default App;

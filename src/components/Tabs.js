import React from 'react'

const Tabs = (props) => {
    function TabHandler(ele){
        props.tabfn(ele.target.innerText)
        
    }
    
    // console.log(props.currentTab)
  return (
    <div className='flex flex-col items-center flex-wrap w-11/12 max-w-[500px] my-4 justify-between mx-auto sm:flex-row gap-3 sm:gap-0'>
      {
        (props.names).map((ele)=>{
           return( <button className={`py-2 bg-[#2C2F3F] px-3 rounded-md text-white font-bold transition-all duration-200 ease-linear ${props.currentTab==ele.title ? "bg-[#1E1F2A] outline-1 outline-white outline":"" }`} onClick={TabHandler} key={ele.id}>{ele.title}</button>)
        })
      }
    </div>
  )
}

export default Tabs

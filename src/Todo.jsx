import React, { useState } from 'react'

export const Todo = () => {

    const[activity,setactivity]=useState("");
    const[listdata,setlistdata]=useState([]);
    
    function addActivity(){
        //setlistdata([...listdata,activity])
        setlistdata((listdata)=>{
            const updatedlist=[...listdata,activity]
            setactivity('')
            return updatedlist
        })
    }

    function removeactivity(i){
        const updatedlistdata=listdata.filter((ele,id)=>{
                return i!=id;
        })
        setlistdata(updatedlistdata);
    }

  return (
   <>
    <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setactivity(e.target.value)}>
        </input>

        <button onClick={addActivity}>Add</button>

        <p className='listheading'>Here is your List</p>
        {listdata!=[]&& listdata.map((data,i)=>{
                return(
                    <>
                        <p key={i}>
                            <div className='listdata'>{data}</div>
                            <div className='btn'><button onClick={()=>removeactivity(i)}>remove</button></div>
                        
                        </p>
                    </>
                )
        
        })}
    </div>
   </>
  )
}

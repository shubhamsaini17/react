import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
useLoaderData
function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=> response.json())
    //     .then((data)=> setData(data));
    // },[])

  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    <img src={data.avatar_url} alt="" />
    
    Github Followers:{data.followers}
    </div>
    </>
  )
}

export default Github

export const githubInfoLofer = async ()=>{
    const response = await fetch('https://api.github.com/users/shubhamsaini17')
    return response.json();
}
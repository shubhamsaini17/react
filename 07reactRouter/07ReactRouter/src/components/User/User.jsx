import React from 'react'
import { useParams } from 'react-router-dom' //  url ma se user/ ka baad vala chij code ma laka ana ka lea banaya ha ya uper vali line 

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      User: {userid} 
    {/* url ma se user/ ka baad vala chij code ma laka ana ka lea banaya ha ya uper vali line* */}
    </div>
  )
}

export default User

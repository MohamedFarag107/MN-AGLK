import React from 'react'
import { useParams } from 'react-router-dom'

function BookIt() {
  const {id} = useParams()
  console.log({id});
  
  return (
    <div>
      <div className="container py-20">
        <h1 className='text-center text-3xl font-bold pb-20'>حجز الجلسة</h1>
        
        <div className='bg-white p-5'>
            <h1>تاكيد الحجز</h1>
        </div>

      </div>
    </div>
  )
}

export default BookIt
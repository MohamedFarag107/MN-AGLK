import React from 'react'

// name 
// email 
// password  
// profileImage:  
// reservations: 
// numberOfReservations:  
// price: 
// rating:  

function UpdateTherapistInfo() {
  return (
    <div>
      <div className="container bg-secondary my-10 rounded-lg">
        <div className='flex flex-col md:flex-row gap-3'>
          <div className=''>
            <img className='rounded-full' src="https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/icons8-customer-240.png?alt=media&token=6990c1d2-53df-4677-8ee3-63e7c8fc8787" alt="" />
          </div>
          <div className='flex-1 flex flex-col justify-center gap-2 py-2'>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'> الاسم:</p> <input placeholder='الاسم' className='flex-1 p-2' type="text" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'> البريد الالكتروني:</p> <input placeholder='البريد الالكتروني' className='flex-1 p-2' type="email" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>  التخصص:</p> <input placeholder='التخصص' className='flex-1 p-2' type="text" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'> السعر:</p> <input placeholder='السعر' min={0} className='flex-1 p-2' type="number" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'> عدد الجلسات:</p> <input placeholder='عدد الجلسات' min={0} className='flex-1 p-2' type="number" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'> الصورة الشخصية:</p> <input placeholder='الصورة الشخصية' className='flex-1 p-2' type="file" />
            </div>
          </div>
        </div>
        <button className='text-center bg-primary py-3 px-6 text-white rounded-md m-5'>تعديل</button>

      </div>
      <div className='h-[120px]' />
    </div>
  )
}

export default UpdateTherapistInfo
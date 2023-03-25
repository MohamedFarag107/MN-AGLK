import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
const Book = () => {
  const bookURL = 'https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/a1f88733921c820db477d054fe96afbb.jpg?alt=media&token=48ca814c-176a-4e34-acdc-2ddfd95b5cd7'
  return (
    <div className='flex flex-col justify-center items-start gap-5 p-5 bg-white rounded-3xl shadow-xl'>
      <div className='rounded-md p-2 cursor-pointer bg-red-500 w-fit text-white transition-all'>
        <AiOutlineDelete />
      </div>
      <div className='flex justify-center items-center w-full'>
        <img className='h-80 object-contain' src={bookURL} alt="book" />
      </div>
      <div className='flex flex-col gap-3'>
        <h1>اسم الكتاب</h1>
        <h1>المؤلف</h1>
        <h1>نبذة</h1>
      </div>
      <button className='text-center bg-primary text-white w-full p-3 rounded-xl'>تحميل</button>
    </div>
  )
}

function AddBook() {
  return (
    <div>
      <div className="container">
        <div className='py-9'>
          <h1 className='text-xl font-bold'>إضافة كتاب</h1>
          <div className='bg-secondary space-y-5 rounded-md p-5 my-5'>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>اسم الكتاب:</p>
              <input placeholder='اسم الكتاب' className='flex-1 p-2' type="text" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>المؤلف:</p>
              <input placeholder='المؤلف' className='flex-1 p-2' type="text" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>نبذة:</p>
              <textarea placeholder='نبذة' rows={5} className='flex-1 p-2' />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>رفع الكتاب:</p>
              <input placeholder='رفع الكتاب' className='flex-1 p-2' type="file" />
            </div>
            <button className='bg-primary text-white p-3 rounded-xl'>إضافة</button>
          </div>
          <h1 className='text-xl font-bold pb-5'>الكتب</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 bg-secondary'>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => <Book key={index} />)
            }
          </div>
          <div className='h-[100px]' />
        </div>
      </div>
    </div>
  )
}

export default AddBook
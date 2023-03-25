import React from 'react'

const Book = () => {
  const bookURL = 'https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/a1f88733921c820db477d054fe96afbb.jpg?alt=media&token=48ca814c-176a-4e34-acdc-2ddfd95b5cd7'
  return (
    <div className='flex flex-col justify-center items-start gap-5 p-5 bg-white rounded-3xl shadow-xl'>
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

function Books() {
  return (
    <div>
      <div className="container py-20">
        <h1 className='text-center text-3xl font-bold pb-20'>المكتبة</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  p-5'>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => <Book key={index} />)
          }

        </div>

      </div>
    </div>
  )
}

export default Books
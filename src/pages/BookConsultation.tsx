import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Card = ({ }: any) => {
  return <div className='flex flex-col md:flex-row gap-3 bg-white shadow-md p-5 rounded-3xl'>
    <div className='flex-1 flex flex-col md:flex-row items-center gap-5'>
      <div className='rounded-full h-[150px] w-[150px] bg-primary flex justify-center items-center overflow-hidden '>
        <img className='rounded-full' src="https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/icons8-customer-240.png?alt=media&token=6990c1d2-53df-4677-8ee3-63e7c8fc8787" alt="" />
      </div>
      <div className='flex flex-col justify-evenly items-start w-full h-full pr-5'>
        <h1>الاسم</h1>
        <h1>التخصص</h1>
        <h1>عدد الجلسات</h1>
        <h1>التقييم</h1>
        <h1>السعر</h1>
      </div>
    </div>
    <div className='flex flex-col justify-end'>
      <Link to={'/book-it/id'} className='p-5 bg-primary text-white rounded-lg shadow-lg'>احجز الأن</Link>
    </div>
  </div>
}
function BookConsultation() {
  return (
    <div>
      <div className="container py-20">
        <h1 className='text-center text-3xl font-bold pb-20'>قائمة المعالجين</h1>
        <div className='bg-white flex items-center gap-5 rounded-lg overflow-hidden shadow-lg'>
          <div className='hover:bg-primary hover:text-white p-5 h-full cursor-pointer'>
            <BiSearch />
          </div>
          <input className='outline-none w-full' type="text" placeholder='ابحث هنا' />
        </div>
        <div className="container py-10 grid grid-cols-1 gap-10">
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => <Card key={index}  />)
          }
        </div>
      </div>
    </div>
  )
}

export default BookConsultation
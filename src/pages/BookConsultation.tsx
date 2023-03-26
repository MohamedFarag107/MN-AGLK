import ProfileImage from '@/components/ProfileImage'
import { UserState } from '@/features/user/user-slice'
import useLoadTherapist from '@/hooks/useLoadTherapist'
import { useAppSelector } from '@/hooks/useRedux'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Card = ({ item }: { item: UserState }) => {
  return <div className='flex flex-col md:flex-row gap-3 bg-white shadow-md p-5 rounded-3xl'>
    <div className='flex-1 flex flex-col md:flex-row items-center gap-5'>
      <div className='rounded-full h-[150px] w-[150px] bg-primary flex justify-center items-center overflow-hidden '>
        <ProfileImage profileImage={item?.profileImage || ""} />
      </div>
      <div className='flex flex-col justify-evenly items-start w-full h-full pr-5'>
        <h1>الاسم : {item.name}</h1>
        <h1>التخصص : {item.specialization}</h1>
        <h1>عدد الجلسات المتاحة: {item.numberOfReservations}</h1>
        {
          item.rating === 0 ? "" : <h1>التقييم : {item.rating}</h1>
        }
        <h1>السعر : {item.price}</h1>
      </div>
    </div>
    {
      item.numberOfReservations === 0 ? <h1 className='text-center text-2xl font-bold'>عفوا لا يوجد معالجين متاحين حاليا</h1> : <div className='flex flex-col justify-end'>
        <Link to={'/book-it/' + item._id} className='p-5 bg-primary text-white rounded-lg shadow-lg'>احجز الأن</Link>
      </div>
    }
  </div>
}
function BookConsultation() {
  const { loading } = useLoadTherapist()
  const { therapist } = useAppSelector(state => state.therapist)
  const [search, setSearch] = useState('')
  return (
    <div>
      <div className="container py-20">
        <h1 className='text-center text-3xl font-bold pb-20'>قائمة المعالجين</h1>
        <div className='bg-white flex items-center gap-5 rounded-lg overflow-hidden shadow-lg'>
          <div className='hover:bg-primary hover:text-white p-5 h-full cursor-pointer'>
            <BiSearch />
          </div>
          <input value={search} onChange={(e) => setSearch(e.target.value)} className='outline-none w-full' type="text" placeholder='ابحث هنا' />
        </div>
        <div className="container py-10 grid grid-cols-1 gap-10">
          {
            therapist.filter(item => item?.name?.trim().includes(search)).map((item, index) => {
              return <Card key={index} item={item} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BookConsultation
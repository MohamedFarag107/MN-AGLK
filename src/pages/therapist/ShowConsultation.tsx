import ProfileImage from '@/components/ProfileImage'
import { useAppSelector } from '@/hooks/useRedux'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'


const PastConsultation = ({ item }: { item: any }) => {
  const [data, setData] = useState<any>({})
  useEffect(() => {
    const load = () => {
      axios.get(`/reservations/${item._id}`).then(res => {
        setData(res.data.data)
      }).catch(err => {
        toast.error("حدث خطأ ما")
      })
    }
    load()
  }, [])

  return <div className='flex flex-col md:flex-row gap-3 bg-white shadow-md p-5 rounded-3xl my-3'>
    <div className='flex-1 flex flex-col md:flex-row items-center gap-5'>
      <div className='rounded-full h-[150px] w-[150px] bg-primary flex justify-center items-center overflow-hidden '>
        <ProfileImage profileImage={data?.patientId?.profileImage || ""} />
      </div>
      <div className='flex flex-col justify-evenly items-start w-full h-full pr-5'>
        <h1>الاسم : {data?.patientId?.name}</h1>
        {
          <h1>التقييم : {data?.rate}</h1>
        }
      </div>
    </div>
  </div>
}


function ShowConsultation() {
  const reservations = useAppSelector(state => state.user.reservations)
  return (
    <div>
      <div className="container bg-secondary my-10 rounded-lg">
        <h1 className='text-3xl text-center py-5 font-bold'>الجلسات السابقة</h1>
        <div>
          {
            reservations && reservations.map((item: any, index) => <PastConsultation key={index} item={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default ShowConsultation
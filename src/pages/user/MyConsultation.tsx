import ProfileImage from '@/components/ProfileImage'
import { useAppSelector } from '@/hooks/useRedux'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'

const PastConsultation = ({ item }: { item: any }) => {
  const [rating, setRating] = useState('')
  const [data, setData] = useState<any>({})
  useEffect(() => {
    const load = () => {
      axios.get(`/reservations/${item._id}`).then(res => {
        setData(res.data.data)
        setRating(res.data.data.rate)
      }).catch(err => {
        toast.error("حدث خطأ ما")
      })
    }
    load()
  }, [])

  const handle = () => {
    if (rating === '') return toast.error("قم بإدخال التقييم")
    if (+rating > 5 || +rating < 1) return toast.error("قيم الجلسة من 1 الي 5")
    axios.put(`/reservations/${item._id}`, { rate: rating }).then(res => {
      toast.success("تم تقييم الجلسة")
      setData({ ...data, rate: +rating })
    }).catch(err => {
      toast.error("حدث خطأ ما")
    })
  }
  return <div>
    <div>
      {
        (+(rating) > 0 && data.rate > 0) ? <h1 className='text-xl font-bold p-5'>تم تقييم الجلسة</h1> : <>
          <div className='pt-5 px-5 flex items-center gap-3'>
            <p>قيم جلستك</p>
            <input value={rating} onChange={(e) => setRating(e.target.value)} className='flex-1 p-2' type="number" min={0} max={5} placeholder='قيم جلستك من 1 الي 5' />
          </div>
          <button onClick={handle} className='bg-primary m-5 mt-2 text-white px-5 py-2 rounded-lg'>تقييم</button></>
      }


    </div>
    <div className='flex flex-col md:flex-row gap-3 bg-white shadow-md p-5 rounded-3xl'>
      <div className='flex-1 flex flex-col md:flex-row items-center gap-5'>
        <div className='rounded-full h-[150px] w-[150px] bg-primary flex justify-center items-center overflow-hidden '>
          <ProfileImage profileImage={data?.therapistId?.profileImage || ""} />
        </div>
        <div className='flex flex-col justify-evenly items-start w-full h-full pr-5'>
          <h1>الاسم : {data?.therapistId?.name}</h1>
          <h1>التخصص : {data?.therapistId?.specialization}</h1>
          {
            <h1>التقييم : {data?.rate}</h1>
          }
          <h1>السعر : {data?.therapistId?.price}</h1>
        </div>
      </div>
    </div>
  </div>
}

function MyConsultation() {
  const reservations = useAppSelector(state => state.user.reservations)
  return (
    <div>
      <div className="container bg-secondary my-10 rounded-lg">
        <h1 className='text-3xl text-center py-5 font-bold'>الجلسات السابقة</h1>

        <div className=''>
          {
            reservations && reservations.map((item: any, index) => <PastConsultation key={index} item={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default MyConsultation
import { useAppSelector } from '@/hooks/useRedux'
import axios from 'axios'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

function BookIt() {
  const therapistId = useParams().id
  const patientId = useAppSelector(state => state.user._id)
  const navigate = useNavigate()
  // date after 2 days
  const date = new Date()
  date.setDate(date.getDate() + 2)
  const [type, setType] = React.useState<"call" | "video" | "clinic">('clinic')
  // loading
  const [loading, setLoading] = React.useState(false)
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setType(value as "call" | "video" | "clinic")
  }

  const handle = () => {
    setLoading(true)
    axios.post('/reservations', {
      therapistId,
      patientId,
      date: date.toISOString(),
      type
    }).then(res => {
      toast.success('تم حجز الجلسة بنجاح')
    }).catch(err => {
      toast.error('حدث خطأ ما')
      console.log(err);
    }).finally(() => {
      setLoading(false)
      navigate('/')
    })

  }

  return (
    <div>
      <div className="container py-20">
        <h1 className='text-center text-3xl font-bold pb-20'>حجز الجلسة</h1>

        <div className='bg-white p-5'>
          <h1>تاكيد الحجز</h1>

          <select onChange={handleTypeChange} defaultValue={type} className='p-3 outline-none w-full rounded-md shadow-md mt-5'>
            <option value="call">مكالمة صوتية</option>
            <option value="video">مكالمة فيديو</option>
            <option value="clinic">المركز</option>
          </select>
        </div>
        <button onClick={handle} className='w-full p-3 bg-primary text-white rounded-md mt-5'>{
          loading ? " ..... جاري الحجز" : "تاكيد الحجز"
        }</button>
      </div>
    </div>
  )
}

export default BookIt
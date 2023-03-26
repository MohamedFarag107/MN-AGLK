import { getImageUrl } from '@/components/ProfileImage';
import { loadUser } from '@/features/user/user-slice';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

// name 
// email 
// password  
// profileImage:  
// reservations: 
// numberOfReservations:  
// price: 
// rating:  

function UpdateTherapistInfo() {
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const [userData, setUserData] = useState<{
    name?: string;
    email?: string;
    profileImage?: string;
    specialization?: string;
    price?: number;
    numberOfReservations?: number;
  }>({
    name: '',
    email: '',
    profileImage: '',
    specialization: '',
    price: 0,
    numberOfReservations: 0,
  })

  useEffect(() => {
    setUserData({
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
      specialization: user.specialization,
      price: user.price,
      numberOfReservations: user.numberOfReservations,
    })
  }, [user])



  const [profile, setprofile] = useState<File>()
  // loading
  const [loading, setloading] = useState(false)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0]
    setprofile(file)
  }
  const handleUpdateUser = () => {
    const formData = new FormData()
    formData.append('name', userData.name as string | Blob)
    formData.append('email', userData.email as string | Blob)
    formData.append('specialization', userData.specialization as string | Blob)
    formData.append('price', userData.price as any)
    formData.append('numberOfReservations', userData.numberOfReservations as any)
    if (profile) {
      formData.append('profileImage', profile)
    }

    setloading(true)
    axios.put('/users/updateMe', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + user.token
      }
    }).then(res => {
      const { data } = res.data
      const allData = { ...user, ...data }
      localStorage.setItem('user', JSON.stringify(allData))
      dispatch(loadUser(allData))
      toast.success('تم تعديل البيانات بنجاح')

    }).catch(err => {
      toast.error('حدث خطأ ما')
      console.log(err);

    }).finally(() => { setloading(false) })
  }

  return (
    <div>
      <div className="container bg-secondary my-10 rounded-lg">
        <div className='flex flex-col md:flex-row gap-3'>
          <div className=''>
            <img src={getImageUrl(userData.profileImage || '')} alt="" className='w-[200px] h-[200px] object-cover rounded-full' />
          </div>
          <div className='flex-1 flex flex-col justify-center gap-2 py-2'>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'> الاسم:</p> <input value={userData.name} onChange={(e) => setUserData((pre) => ({ ...pre, name: e.target.value }))} placeholder='الاسم' className='flex-1 p-2' type="text" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'> البريد الالكتروني:</p> <input value={userData.email} onChange={(e) => setUserData((pre) => ({ ...pre, email: e.target.value }))} placeholder='البريد الالكتروني' className='flex-1 p-2' type="email" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'>  التخصص:</p> <input value={userData.specialization} onChange={(e) => setUserData((pre) => ({ ...pre, specialization: e.target.value }))} placeholder='التخصص' className='flex-1 p-2' type="text" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'> السعر:</p> <input value={userData.price} onChange={(e) => setUserData((pre) => ({ ...pre, price: Number(e.target.value) }))} placeholder='السعر' className='flex-1 p-2' type="number" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'> عدد الجلسات:</p> <input value={userData.numberOfReservations} onChange={(e) => setUserData((pre) => ({ ...pre, numberOfReservations: Number(e.target.value) }))} placeholder='عدد الجلسات' className='flex-1 p-2' type="number" />
            </div>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <p className='w-[100px]'> الصورة الشخصية:</p> <input onChange={handleFileUpload} placeholder='الصورة الشخصية' className='flex-1 p-2' type="file" />
            </div>
          </div>
        </div>
        <button onClick={handleUpdateUser} className='text-center bg-primary py-3 px-6 text-white rounded-md m-5'>تعديل</button>

      </div>
      <div className='h-[120px]' />
    </div>
  )
}

export default UpdateTherapistInfo
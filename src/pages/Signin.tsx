import { loadUser } from '@/features/user/user-slice'
import { useAppDispatch } from '@/hooks/useRedux'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const LOGO = 'https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/logo.png?alt=media&token=402865e5-0a57-462f-8568-d6a2e79d3e19'

function Signin() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  // email
  const [email, setEmail] = useState('')
  // password
  const [password, setPassword] = useState('')
  // loading
  const [loading, setLoading] = useState(false)
  const handleSigin = () => {
    setLoading(true)
    // email validation
    if (!email.includes('@')) {
      toast.error('البريد الالكتروني غير صحيح')
      setLoading(false)
      return
    }
    // password validation
    if (password.length < 6) {
      toast.error("كلمة المرور غير صحيحة")
      setLoading(false)
      return
    }
    // send data to server
    axios.post('/Auths/login', {
      email,
      password
    }).then(res => {
      const user = { ...res.data.data, token: res.data.token }
      localStorage.setItem('user', JSON.stringify(user))
      dispatch(loadUser(user))
      toast.success('تم تسجيل الدخول بنجاح')
      navigate('/')
    }).catch(err => {
      toast.error("خطأ في الايميل او كلمة السر")
    }).finally(() => {
      setLoading(false)
    })
  }
  return (
    <div className='w-screen h-screen bg-[#81A0AD]'>
      <div style={{
        backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/Mask%20Group%209.png?alt=media&token=5ef7b1c6-5d80-417d-9b6f-6534220888fc)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'right',
      }} className='w-screen h-screen' >
        <div className="container flex justify-end h-full">
          <div className='flex flex-col items-center bg-[#f5f5ef7a] w-fit h-full  px-5 md:px-40'>
            <img src={LOGO} alt="logo" className='rounded-full mt-10' />
            <div className='w-full pt-20'>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='p-3 outline-none w-full rounded-md shadow-md mt-5' type="text" placeholder='البريد الالكتروني' />
              <input value={password} onChange={(e) => setPassword(e.target.value)} className='p-3 outline-none w-full rounded-md shadow-md mt-5' type="text" placeholder='كلمة السر' />
            </div>
            <button onClick={handleSigin} className='py-3 px-8 bg-primary text-white rounded-md shadow-md mt-5'>{
              loading ? 'جاري التحميل...' : 'تسجيل الدخول'
            }</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
import { useState } from 'react'
// 
function Signup() {
  const [type, setType] = useState('client')
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value)
  }
  console.log({ type });

  const LOGO = 'https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/logo.png?alt=media&token=402865e5-0a57-462f-8568-d6a2e79d3e19'
  return (
    <div className='w-screen h-screen bg-[#81A0AD]'>
      <div style={{
        backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/Mask%20Group%209.png?alt=media&token=5ef7b1c6-5d80-417d-9b6f-6534220888fc)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'right',
      }} className='w-screen h-screen' >
        <div className="container flex justify-end h-full">
          <div className='flex flex-col items-center bg-[#f5f5ef7a] w-fit h-full  px-5  md:px-40'>
            <img src={LOGO} alt="logo" className='rounded-full mt-10' />
            <div className='w-full pt-20'>
              <input className='p-3 outline-none w-full rounded-md shadow-md' type="text" placeholder='الاسم' />
              <input className='p-3 outline-none w-full rounded-md shadow-md mt-5' type="text" placeholder='البريد الالكتروني' />
              {/* drop down to choose between therabist or client */}
              <select onChange={handleTypeChange} defaultValue={type} className='p-3 outline-none w-full rounded-md shadow-md mt-5'>
                <option value="client">عميل</option>
                <option value="therabist">متخصص</option>
              </select>
              <input className='p-3 outline-none w-full rounded-md shadow-md mt-5' type="text" placeholder='كلمة السر' />
              <input className='p-3 outline-none w-full rounded-md shadow-md mt-5' type="text" placeholder='تأكيد كلمة السر' />
            </div>
            <button className='py-3 px-8 bg-primary text-white rounded-md shadow-md mt-5'>تسجيل</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
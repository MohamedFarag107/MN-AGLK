import Footer from '@/components/Footer'
import { useOutlet } from 'react-router-dom'
import { AiOutlineHome, AiOutlineFileAdd } from 'react-icons/ai'

import { CgProfile } from 'react-icons/cg'
import Link from '@/components/Link'

function User() {
  const outlet = useOutlet()
  return (
    <div>
      <div className='flex'>
        <div className='w-[100px] flex flex-col pt-20 items-center gap-9'>
          <Link to='/'>
            <AiOutlineHome size={40} />
          </Link>
          <Link to='/user/update'>
            <CgProfile size={40} />
          </Link>
          <Link to='/user/my-consultation'>
            <AiOutlineFileAdd size={40} />
          </Link>
        </div>
        <div className='flex-1 bg-white '>
          {
            outlet ? outlet : <div className='flex justify-center items-center h-screen text-3xl font-bold'>

              <h1>مرحبا بك في  <span className='text-secondaryGreen '>من أجلك</span></h1>

            </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default User
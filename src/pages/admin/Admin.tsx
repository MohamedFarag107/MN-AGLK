import Footer from '@/components/Footer'
import { Outlet, useOutlet } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineBookOpen, HiOutlineColorSwatch } from 'react-icons/hi'
import Link from '@/components/Link'

function Admin() {
  const outlet = useOutlet()
  return (
    <div>
      <div className='flex'>
        <div className='w-[100px] flex flex-col pt-20 items-center gap-9'>
          <Link to='/'>
            <AiOutlineHome size={40} />
          </Link>
          <Link to='/admin/add-diseases'>
            <HiOutlineColorSwatch size={40} />
          </Link>
          <Link to='/admin/add-book'>
            <HiOutlineBookOpen size={40} />
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

export default Admin
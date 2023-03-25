import { useAppSelector } from '@/hooks/useRedux'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface LinkProps {
  to: string
  value: string
}

const Link = ({ to, value }: LinkProps) => {
  const commonClasses = 'w-full h-full md:py-4 md:px-4 flex justify-center items-center  shado-md hover:bg-secondaryGreen rounded-md text-primary font-bold '
  return <NavLink className={({ isActive }) => isActive ? `${commonClasses}  bg-primary text-white` : `${commonClasses} bg-white`} to={to}>
    {value}
  </NavLink>
}

function Nav() {
  const { nav } = useAppSelector(state => state.images)
  return (
    <div className='h-[74px] w-full flex justify-center items-center' style={{
      backgroundImage: `url(${nav})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'left',
    }}>
      <div className='grid grid-cols-6 gap-4'>
        <Link to='/' value='الرئيسية' />
        <Link to='/book-Consultation' value='المعالجين' />
        <Link to='/books' value='المكتبة' />
        <Link to='/diseases' value='الامراض' />
        <Link to='/signin' value='تسجيل الدخول' />
        <Link to='/signup' value='إنشاء حساب' />
      </div>
    </div>
  )
}

export default Nav
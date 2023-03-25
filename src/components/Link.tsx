import React from 'react'
import { NavLink } from 'react-router-dom'

function Link({ to, children }: { to: string, children: React.ReactNode }) {
  const commonClasses = 'rounded-md p-2 cursor-pointer hover:bg-primary hover:text-white transition-all'
  return <NavLink className={({ isActive }) => isActive ? `${commonClasses}  bg-primary text-white` : `${commonClasses} bg-white`} to={to}>
    {children}
  </NavLink>
}

export default Link
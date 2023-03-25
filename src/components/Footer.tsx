import { useAppSelector } from '@/hooks/useRedux'
import React from 'react'

function Footer() {
  const { footer } = useAppSelector(state => state.images)
  return (
    <div>
      <img src={footer} alt="footer" />
    </div>
  )
}

export default Footer
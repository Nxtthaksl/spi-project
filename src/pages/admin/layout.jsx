import React from 'react'
import Navber from './components/Navbar'

export default function layout({children}) {
  return (
    <div>
        <Navber />
        {children} 
    </div>
  )
}

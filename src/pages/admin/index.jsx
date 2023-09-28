import React from 'react'
import axios from '../../libs/axios'
import Navbar from './components/Navbar'
import BasicMenu from './components/adminBasicMenu'
import Nametitle from './components/adminBasic/basicNametitle'
import BasicCourse from './components/adminBasic/basicCourse'
import BasicFaculty from './components/adminBasic/basicFaculty'
import BasicDepartment from './components/adminBasic/basicDepartment'
import BasicMajor from './components/adminBasic/basicMajor'
import BasicSemester from './components/adminBasic/basicSemester'

import { Outlet } from 'react-router-dom'

export default function Admin() {

  async function loadData() {
    try {
      const res = await axios.get("/role")
      const data = await res.data

      console.log(data)


    } catch (error) {

    }
  }

  return (
    <div>
      <Navbar />  
      <Outlet />
    </div>
  )
}
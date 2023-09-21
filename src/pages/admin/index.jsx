import React from 'react'
import axios from '../../libs/axios'
import Navbar from './components/Navbar'
// import Banner from './components/Banner'
import BasicMenu from './components/adminBasicMenu'
import Nametitle from './components/adminBasic/basicNametitle'
import BasicCourse from './components/adminBasic/basicCourse'
import BasicFaculty from './components/adminBasic/basicFaculty'
import BasicDepartment from './components/adminBasic/basicDepartment'
import BasicMajor from './components/adminBasic/basicMajor'
import BasicSemester from './components/adminBasic/basicSemester'

import TeacherMenu from './components/adminTeacherMenu'
import StaffMenu from './components/adminStaffMenu'
import StudentMenu from './components/adminStudentMenu'
// import basiccourse from './components/basicCourse'
import TableList from './components/adminStudent/tableList'
import Layout from './layout'


export default function Admin() {

  async function loadData(){
    try {
      const res = await axios.get("/role")
      const data = await res.data

      console.log(data)


    } catch (error) {
      
    }
  }

  return (
    <Layout>
      {/* <Navbar /> */}
      {/* <button className="btn btn-primary" onClick={loadData}>LOAD DATA</button> */}
      {/* <Banner /> */}
      <br />
      {/* <BasicMenu /> */}
      <Nametitle />
      {/* <BasicCourse /> */}
      {/* <BasicFaculty /> */}
      {/* <BasicDepartment /> */}
      {/* <BasicMajor /> */}
      {/* <BasicSemester /> */}

      {/* <TeacherMenu /> */}

      {/* <StaffMenu /> */}

      {/* <StudentMenu /> */}
      {/* <TableList /> */}
    </Layout>
  )
}
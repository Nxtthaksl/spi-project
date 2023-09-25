import React, { useState, useEffect } from 'react'
import BasicMenu from './components/adminBasicMenu'
import Nametitle from './components/adminBasic/basicNametitle'
import Course from './components/adminBasic/basicCourse'
import Faculty from './components/adminBasic/basicFaculty'
import Department from './components/adminBasic/basicDepartment'
import Major from './components/adminBasic/basicMajor'
import Semester from './components/adminBasic/basicSemester'

export default function mainAdmin() {
    const [menu, setMenu] = useState("Nametitle")
    function handleClick(menu) {
        console.log(menu)
        setMenu(menu)
    }


    return (
        <div>
            <div className="row">
                <div className="col col-2">
                    <BasicMenu onClick={handleClick} />
                </div>
                <div className="col col-10 p-4">
                    {menu === "Nametitle" && <Nametitle />}
                    {menu === "Course" && <Course />}
                    {menu === "Faculty" && <Faculty />}
                    {menu === "Department" && <Department />}
                    {menu === "Major" && <Major />}
                    {menu === "Semester" && <Semester />}
                </div>
            </div>
        </div>
    )
}

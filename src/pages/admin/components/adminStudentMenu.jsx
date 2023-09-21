import React from 'react'

export default function adminTeacherMenu() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='bg-light col-auto col-md-2 min-vh-100'>
                <a className='text-decoration-none text-black d-flex align-itemcenter'>
                    <span className='ms-1 fs-4 text-center'>เมนู</span>
                </a>
                <hr className='text-black d-none d-sm-block'/>
                <ul className='nav nav-pills flex-column'>
                    <li className='nav-item text-center'>
                        <a href="" className='nav-link active text-bg-primary p-2' aria-current='page'>รายชื่อนักศึกษา</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

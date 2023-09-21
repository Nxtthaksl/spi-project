import React from 'react'

export default function Menu() {
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
                        <a href="" className='nav-link active text-bg-primary p-2' aria-current='page'>คำนำหน้าชื่อ</a>
                    </li>
                    <br />
                    <li className='nav-item text-center'>
                        <a href="" className='nav-link active text-bg-primary p-2' aria-current='page'>หลักสูตร</a>
                    </li>
                    <br />
                    <li className='nav-item text-center'>
                        <a href="" className='nav-link active text-bg-primary p-2' aria-current='page'>คณะ</a>                    </li>
                    <br />
                    <li className='nav-item text-center'>
                        <a href="" className='nav-link active text-bg-primary p-2' aria-current='page'>ภาควิชา</a> 
                    </li>
                    <br />
                    <li className='nav-item text-center'>
                        <a href="" className='nav-link active text-bg-primary p-2' aria-current='page'>สาขาวิชา</a>
                    </li>
                    <br />
                    <li className='nav-item text-center'>
                    <a href="" className='nav-link active text-bg-primary p-2' aria-current='page'>ประเภทการสอบ</a>
                    </li>
                    <br />
                    <li className='nav-item text-center'>
                        <a href="" className='nav-link active text-bg-primary p-2' aria-current='page'>วิชา</a>
                    </li>
                    <br />
                    <li className='nav-item text-center'>
                        <a href="" className='nav-link active text-bg-primary p-2' aria-current='page'>สถานะโครงงาน</a>
                    </li>
                    <br />
                    <li className='nav-item text-center'>
                        <a href="" className='nav-link active text-bg-primary p-2' aria-current='page'>ห้องสอบ</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

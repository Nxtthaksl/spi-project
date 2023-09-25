import React from 'react'
import { BsFillHouseDoorFill, BsFillPersonFill, BsBellFill, BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="info">
            <div className="container-fluid">
                <BsFillHouseDoorFill className='fs-4' />
                {/* <a className="navbar-brand" href="#">หน้าหลัก</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">การจัดการข้อมูลพื้นฐาน</a>
                        </li> */}

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                การจัดการข้อมูล
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/admin" className="dropdown-item" >การจัดการข้อมูลพื้นฐาน</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="teacher">การจัดการข้อมูลอาจารย์</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="staff">การจัดการข้อมูลเจ้าหน้าที่</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="student">การจัดการข้อมูลนักศึกษา</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">ข้อมูลโครงงานพิเศษ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">ข้อมูลข่าวสาร</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">ออกรายงาน</a>
                        </li>
                    </ul>
                    <BsBellFill className='fs-5' />
                    <form className="d-flex" role="search">
                        {/* <BsSearch /> */}
                        <input className="form-control me-2" type="search" placeholder="ค้นหา" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">ค้นหา</button>
                    </form>
                    <a href="#"></a>
                    <button className="btn btn-outline-danger" type="submit">ออกจากระบบ</button>
                    {/* <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <BsFillPersonFill className='fs-3' />
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">ข้อมูลส่วนตัว</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">การตั้งค่า</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">ออกจากระบบ</a></li>
                    </ul> */}
                </div>
            </div>
        </nav>

        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <Link className="navbar-logo" to="/admin">หน้าหลัก</Link>
        //     <div className='menu-icon'>
        //         <i className="className"></i>
        //     </div>
        //     </nav>

    )
}

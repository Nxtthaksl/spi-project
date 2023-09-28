import React from 'react'
import { BsFillHouseDoorFill, BsFillPersonFill, BsBellFill, BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SPI-PROJECT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto ">

                        <li className="nav-item dropdown">
                            <a className="nav-link mx-2 dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                การจัดการข้อมูล
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link to="/admin" className="dropdown-item" href="#">การจัดการข้อมูลพื้นฐาน</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="staff">การจัดการข้อมูลเจ้าหน้าที่</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="teacher">การจัดการข้อมูลอาจารย์</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="student">การจัดการข้อมูลนักศึกษา</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="project" className="nav-link mx-2 active" aria-current="page" href="#">ข้อมูลโครงงานพิเศษ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="news" className="nav-link mx-2 active" href="#">ข้อมูลข่าวสาร</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="document" className="nav-link mx-2 active" href="#">ออกรายงาน</Link>
                        </li>
                    </ul>
                    {/* <BsBellFill className='fs-5' /> */}
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="ค้นหา" aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit"><BsSearch className='fs-5'/></button>
                        <ul></ul>
                    </form>
                    <button className="btn btn-outline-danger" type="submit">ออกจากระบบ</button>
                </div>
            </div>
        </nav>
    )
}

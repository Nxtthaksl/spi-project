import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './LoginSingup.css'
import axios from '../../libs/axios'
import {FaUser, FaLock, FaBorderAll} from 'react-icons/fa'

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function onSubmit() {
        console.log("CLICK")
        try {
            const payload = {
                user: username,
                password: password
            }
            const res = await axios.post("/login", payload)
            const data = await res.data
            
            console.log(data)

            localStorage.setItem("token", data.token)

            switch (data.data.id_role) {
                case 1: //1 คือ ผู้ดูแลระบบ
                    navigate("/admin")
                    break;
                case 2: //2 คือ เจ้าหน้าที่
                    navigate("/staff")
                    break;
                default:
                    break;
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
    <div className="card position-absolute top-50 start-50 translate-middle" style={{width: '40rem'}}>
        <div className="card-body">
            {username} || {password}
            <div className="header">
                <div className="card-title fs-1">Sign Up</div>
                <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <FaUser />
                        <input type="text" className="form-control"  placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        </div>
                        <div className="inputs">
                            <div className="input">
                                <FaLock />
                                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="forgot-password">Lost Password? <span>Click Here</span></div>
                                <div className="submit-container">
                                    {/* <button className="submit">Sign Up</button> */}
                                    <button type="button" className="btn btn-success btn-lg">Sign Up</button>
                                    <button type="button" className="btn btn-primary btn-lg" onClick={onSubmit}>Login</button>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
    )
}

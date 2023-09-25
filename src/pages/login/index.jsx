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
    // <div className="card position-absolute top-50 start-50 translate-middle" style={{width: '40rem'}}>
    //     <div className="card-body">
    //         {username} || {password}
    //         <div className="header">
    //             <div className="card-title fs-1">Sign Up</div>
    //             <div className="underline"></div>
    //             </div>
    //             <div className="inputs">
    //                 <div className="input">
    //                     <FaUser />
    //                     <input type="text" className="form-control"  placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
    //                     </div>
    //                     </div>
    //                     <div className="inputs">
    //                         <div className="input">
    //                             <FaLock />
    //                             <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //                             </div>
    //                             <div className="forgot-password">Lost Password? <span>Click Here</span></div>
    //                             <div className="submit-container">
    //                                 {/* <button className="submit">Sign Up</button> */}
    //                                 <button type="button" className="btn btn-success btn-lg">Sign Up</button>
    //                                 <button type="button" className="btn btn-primary btn-lg" onClick={onSubmit}>Login</button>
    //                                 </div>
    //                                 </div>
    //                                 </div>
    //                                 </div>

    <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
        {username} || {password}
          <div className="header">
            <div className="card-title fs-1">Sign Up</div>
            <div className="underline"></div>
               </div>
          
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          {/* Password input */}
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft: '2.0rem', paddingRight: '2.0rem'}} onClick={onSubmit}>Login</button>
            {/* <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a></p> */}
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    )
}

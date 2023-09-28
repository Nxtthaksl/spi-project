import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/login'
import AdminLayout from './pages/admin'
import AdminMain from './pages/admin/main'
import AdminStaff from './pages/admin/components/adminStaff'
import AdminTeacher from './pages/admin/components/adminTeacher'
import AdminStudent from './pages/admin/components/adminStudent'
import AdminProject from './pages/admin/components/adminProject'
import AdminNews from './pages/admin/components/adminNews'
import AdminDocument from './pages/admin/components/adminDocument'


import StaffPage from './pages/staff'
import TeacherPage from './pages/teacher'
import StudentPage from './pages/student'
import { BrowserRouter as Router, Route, Outlet ,Routes } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginPage />,
    
//   },
//   {
//     path: "/admin",
//     element: <AdminPage />
//   },
//   {
//     path: "/staff",
//     element: <StaffPage />
//   },
//   {
//     path: "/teacher",
//     element: <TeacherPage />
//   },
//   {
//     path: "/student",
//     element: <StudentPage />
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<AdminMain />} />
          <Route path="staff" element={<AdminStaff />} />
          <Route path="teacher" element={<AdminTeacher />} />
          <Route path="student" element={<AdminStudent />} />
          <Route path="project" element={<AdminProject />} />
          <Route path="news" element={<AdminNews />} />
          <Route path="document" element={<AdminDocument />} />
          
          {/* <Route path="teacher" element={<TeacherPage />} />
          <Route path="student" element={<StudentPage />} /> */}
        </Route>
        <Route path="/staff" element={<StaffPage />}>

        </Route>
      </Routes>
    </Router>

  </React.StrictMode>,
)
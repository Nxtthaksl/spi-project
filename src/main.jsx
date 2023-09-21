import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/login'
import AdminPage from './pages/admin'
import StaffPage from './pages/staff'
import TeacherPage from './pages/teacher'
import StudentPage from './pages/student'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />
  },
  {
    path: "/staff",
    element: <StaffPage />
  },
  {
    path: "/teacher",
    element: <TeacherPage />
  },
  {
    path: "/student",
    element: <StudentPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
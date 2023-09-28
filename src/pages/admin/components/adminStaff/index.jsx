import React, {useState, useEffect, useRef} from 'react'
import axios from '../../../../libs/axios'
import { useForm } from "react-hook-form"

export default function index() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm()

  let x = 10;
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [editMode, setEditMode] = useState(null)
  const modalRef = useRef()
  const openModal = useRef()

      async function fetchData() {
        try {
          const res = await axios.get("/staff")
          const data = await res.data
          setData(data)
        } catch (error) {
          console.error(error)
        }
      }
      useEffect(() => {
        fetchData()
      }, [])

  return (
    <div>
      {JSON.stringify(data)}
      {loading && "กำลังโหลดข้อมูล"}
      <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">+ เพิ่ม</button>
      <br />
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">ลำดับ</th>
            <th scope="col">Username</th>
            <th scope="col">initials</th>
            <th scope="col">id_name_title</th>
            <th scope="col">ชื่อภาษาไทย</th>
            <th scope="col">นามสกุลภาษาไทย</th>
            <th scope="col">ชื่อภาษาอังกฤษ</th>
            <th scope="col">นามสกุลภาษาอังกฤษ</th>
            <th scope="col">เบอร์โทรศัพท์</th>
            <th scope="col">Email</th>
            <th scope='col'>Password</th>
            <th scope="col">สถานะ</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
            <tr key={index}>
              <td scope="row">{row.id_staff}</td>
              <td scope="row">{row.username}</td>
              <td scope="row">{row.initials}</td>
              <td scope="row">{row.id_name_title}</td>
              <td scope="row">{row.first_name_th}</td>
              <td scope="row">{row.last_name_th}</td>
              <td scope="row">{row.first_name_en}</td>
              <td scope="row">{row.last_name_en}</td>
              <td scope="row">{row.phone}</td>
              <td scope="row">{row.email}</td>
              <td scope="row">{row.password}</td>
              <td scope="row">{row.id_role}</td>
              <td></td>
              <td>
                <button type="button" className="btn btn-outline-warning">แก้ไข</button>
                <button type="button" className="btn btn-outline-danger">ลบ</button>
              </td>
            </tr>
            ))}
        </tbody>
      </table>
      </div>

  )
}

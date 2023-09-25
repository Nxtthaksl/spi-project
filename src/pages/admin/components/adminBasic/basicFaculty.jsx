import React, { useState, useEffect, useRef } from 'react'
import axios from "../../../../libs/axios";
import { useForm } from "react-hook-form"

export default function basicFaculty() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  let x = 10;
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const modalRef = useRef()

  async function onSubmit(formdata) {
    try {
      console.log(formdata)
      setLoading(true)
      const res = await axios.post("/faculty", formdata)
      const data = await res.data
      if (data){
        // alert("เพิ่มข้อมูลสำเร็จ")
        fetchData()
        reset({
          faculty_code: "",
          faculty_name: "",
        })
        modalRef.current.click()
        setLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchData() {
    try {
      setLoading(true)
      const res = await axios.get("/faculty")
      const data = await res.data
      setData(data)
      setLoading(false)
      console.log(data)
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
            <th scope="col">รหัสคณะ</th>
            <th scope="col">ชื่อคณะ</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td scope="row">{row.faculty_code}</td>
              <td>{row.faculty_name}</td>
              <td>
                <button type="button" className="btn btn-outline-warning">แก้ไข</button>
                <button type="button" className="btn btn-outline-danger">ลบ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">เพิ่มคณะ</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">รหัสคณะ :</label>
                    <input type="text" {...register("faculty_code", {required:true})} className="form-control" id="recipient-name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">ชื่อคณะ :</label>
                    <input type="text" {...register("faculty_name", {required:true})} className="form-control" id="recipient-name" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary"  disabled={loading} data-bs-dismiss="modal">ออก</button>
                <button type="button" className="btn btn-secondary d-none" ref={modalRef} data-bs-dismiss="modal">ออก</button>
                <button type="button" onClick={handleSubmit(onSubmit)} disabled={loading} className="btn btn-success">
                  {loading && (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  )}
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import axios from "../../../../libs/axios";

export default function basicSemester() {
  let x = 10;
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    try {
      setLoading(true)
      const res = await axios.get("/semester")
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
      <button type="button" className="btn btn-outline-success">+ เพิ่ม</button>
      <br />
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">ภาคเรียน</th>
            <th scope="col">ปี</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td scope="row">{row.semester}</td>
              <td>{row.year}</td>
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

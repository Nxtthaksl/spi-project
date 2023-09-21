import React from 'react'

export default function basicMajor() {
  return (
    <div>
  <button type="button" className="btn btn-outline-success">+ เพิ่ม</button>
  <br />
  <table className="table text-center">
    <thead>
      <tr>
        <th scope="col">รหัสสาขาวิชา</th>
        <th scope="col">ชื่อสาขาวิชา</th>
        <th scope="col">รหัสภาควิชา</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>-</td>
        <td>-</td>
        <td>
        <button type="button" className="btn btn-outline-warning">แก้ไข</button>
        <button type="button" className="btn btn-outline-danger">ลบ</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

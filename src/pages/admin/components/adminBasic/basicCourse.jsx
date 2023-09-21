import React from 'react'

export default function basicCourse() {
  return (
    <div>
  <button type="button" className="btn btn-outline-success">+ เพิ่ม</button>
  <br />
  <table className="table text-center">
    <thead>
      <tr>
        <th scope="col">ลำดับ</th>
        <th scope="col">รหัสนักศึกษา</th>
        <th scope="col">คำนำหน้า</th>
        <th scope="col">ชื่อภาษาไทย</th>
        <th scope="col">นามสกุลภาษาไทย</th>
        <th scope="col">ชื่อภาษาอังกฤษ</th>
        <th scope="col">นามสกุลภาษาอังกฤษ</th>
        <th scope="col">เบอร์โทรศัพท์</th>
        <th scope="col">ที่อยู่</th>
        <th scope="col">อีเมล</th>
        <th scope="col">major_code</th>
        <th scope="col">course_code</th>
        <th scope="col">รหัสผ่าน</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>
        <button type="button" className="btn btn-outline-warning">แก้ไขรายชื่อ</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  )
}

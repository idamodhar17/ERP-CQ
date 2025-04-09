import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from '../ADMIN/AdminDashboard/AdminDashboard';
import StudentReport from '../ADMIN/StudentReport/StudentReport';
import SubjectAssign from '../ADMIN/Subject/SubjectAssign';
import ClassTeacher from '../ADMIN/Assing Class Teacher/ClassTeacher';
import Error from '../ERROR/Error';

export default function FrontendRoute() {
  return (
    <>

<div className="mx-5 p-4">

                        
<Routes>
    <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
    <Route path="/Student-Report" element={<StudentReport />} />
    <Route path="/Subject" element={<SubjectAssign/>}/>
    <Route path='/ClassTeacher' element={<ClassTeacher/>} />
    <Route path="*" element={<Error />} />
</Routes>



</div>

    </>
  )
}

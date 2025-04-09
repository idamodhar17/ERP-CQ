import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from '../ADMIN/AdminDashboard/AdminDashboard';
import StudentReport from '../ADMIN/StudentReport/StudentReport';
import SubjectAssign from '../ADMIN/Subject/SubjectAssign';
import ClassTeacher from '../ADMIN/Assing Class Teacher/ClassTeacher';
import Error from '../ERROR/Error';
import AssignSubject from '../ADMIN/AssignSubject/AssignSubject';
import StudentCategory from '../ADMIN/Student Info/StudentCategory/StudentCategory';
import AddStudent from '../ADMIN/Student Info/AddStudent/AddStudent';
import StudentList from '../ADMIN/Student Info/StundetList/StudentList';
import StudentAttendance from '../ADMIN/Student Info/StudentAttandance/StudentAttendance';
import TeacherToDo from '../Teachers/Teacher To do/TeacherToDo';
import TeacherHomeworkAddHW from '../Teachers/Teacher Homework/TeacherHomework-AddHW/TeacherHomework-AddHW';
import TeacherHomeworkReport from '../Teachers/Teacher Homework/TeacherHomework-Report/TeacherHomeworkReport';



export default function FrontendRoute() {
  return (
    <>

<div className="mx-5 p-4">

                        
<Routes>
    <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
    <Route path="/Student-Report" element={<StudentReport />} />
    <Route path="/Subject" element={<SubjectAssign/>}/>
    <Route path='/ClassTeacher' element={<ClassTeacher/>} />
    <Route path="/AssignSubject" element={<AssignSubject/>}/>

    <Route path='/StudentCategory' element={<StudentCategory/>} />
    <Route path='/AddStudent' element={<AddStudent/>}/>
    <Route path='/StudnetList' element={<StudentList/>}/>   
    <Route path='/StudentAttendance' element={<StudentAttendance/>} />
    <Route path="*" element={<Error />} />

    <Route path="/TeacherToDo" element={<TeacherToDo />} />
    <Route path="/TeacherHomework-AddHW" element={<TeacherHomeworkAddHW />} />
    <Route path="/TeacherHomework-Report" element={<TeacherHomeworkReport />} />
</Routes>



</div>

    </>
  )
}

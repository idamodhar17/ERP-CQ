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
import TeacherHomeworkAddHW from '../Teachers/Teacher Homework/TeacherHomework-AddHW/TeacherHomework-AddHW';
import TeacherHomeworkReport from '../Teachers/Teacher Homework/TeacherHomework-Report/TeacherHomeworkReport';
import TeacherHomeworkList from '../Teachers/Teacher Homework/TeacherHomework-List/TeacherHomeworkList';
import Notice from '../Notice/Notice';
import ContentResources from '../../Resources/ContentResources/ContentResources';
import TopicResources from '../../Resources/TopicResources/TopicResources';
import LessonResources from '../../Resources/LessonResources/LessonResources';


export default function FrontendRoute() {
  return (
    <>

      <div className="mx-5 p-4">

        <Routes>
          <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
          <Route path="/Student-Report" element={<StudentReport />} />
          <Route path="/Subject" element={<SubjectAssign />} />
          <Route path='/ClassTeacher' element={<ClassTeacher />} />
          <Route path="/AssignSubject" element={<AssignSubject />} />

          <Route path='/StudentCategory' element={<StudentCategory />} />
          <Route path='/AddStudent' element={<AddStudent />} />
          <Route path='/StudnetList' element={<StudentList />} />
          <Route path='/StudentAttendance' element={<StudentAttendance />} />
          <Route path="*" element={<Error />} />


          <Route path="/TeacherHomework-AddHW" element={<TeacherHomeworkAddHW />} />
          <Route path="/TeacherHomework-Report" element={<TeacherHomeworkReport />} />
          <Route path='/TeacherHomework-List' element={<TeacherHomeworkList />} />
          <Route path='/Notice' element={<Notice />} />
          <Route path='/Resources-ContentUpload' element={<ContentResources />} />
          <Route path='/TopicResources' element={<TopicResources />} />
          <Route path='/LessonResources' element={<LessonResources />} />
        </Routes>

      </div>
    </>
  )
}

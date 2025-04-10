import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from '../ADMIN/AdminDashboard/AdminDashboard';
import StudentReport from '../ADMIN/Student Info/StudentReport/StudentReport';
import SubjectAssign from '../ADMIN/Subject/SubjectAssign';
import ClassTeacher from '../ADMIN/Assing Class Teacher/ClassTeacher';
import Error from '../ERROR/Error';
import AssignSubject from '../ADMIN/AssignSubject/AssignSubject';
import StudentCategory from '../ADMIN/Student Info/StudentCategory/StudentCategory';
import AddStudent from '../ADMIN/Student Info/AddStudent/AddStudent';
import StudentList from '../ADMIN/Student Info/StundetList/StudentList';
import StudentAttendance from '../ADMIN/Student Info/StudentAttandance/StudentAttendance';
import TeacherToDo from '../Teachers/ToDoList/ToDoList';
import TeacherHomeworkAddHW from '../Teachers/Teacher Homework/TeacherHomework-AddHW/TeacherHomework-AddHW';
import TeacherHomeworkReport from '../Teachers/Teacher Homework/TeacherHomework-Report/TeacherHomeworkReport';
import TeacherHomeworkList from '../Teachers/Teacher Homework/TeacherHomework-List/TeacherHomeworkList';
import FeeGroup from '../ADMIN/Fees/GroupFees/FeeGroup';
import FeeType from '../ADMIN/Fees/FeeType/FeeType';
import FeesInvoice from '../ADMIN/Fees/FeesInvoice/FeesInvoice';
import TeacehrReport from '../ADMIN/Teacher/TeacherReport/TeacehrReport';
import AddTeacher from '../ADMIN/Teacher/AddTeacher/AddTeacher';
import StaffReport from '../ADMIN/Staff/StaffReport/StaffReport';
import AssignStaff from '../ADMIN/Staff/AssignStaff/AssignStaff';
import AddStaff from '../ADMIN/Staff/AddStaff/AddStaff';
import GenrateId from '../ADMIN/Student Info/GenrateId/GenrateId';
import AddClass from '../ADMIN/Class/AddClass/AddClass';
import AdmissionList from '../ADMIN/Admission/AdmissionList/AdmissionList';
import NewAdmission from '../ADMIN/Admission/NewAdmission/NewAdmission';
import ResetPassword from '../ADMIN/Password/ResetPassword/ResetPassword';
import TeacherDashboard from '../Teachers/TeacherDashboard/TeacherDashboard';
import StudentProfile from '../Teachers/StudentProfile/StudentProfile';
import OurProfile from '../Parent/OurStudentProfile/OurProfile';
import StaffSalary from '../AccountSection/StaffSalary/StaffSalary';
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
    <Route path="/Subject" element={<SubjectAssign/>}/>
    <Route path="/AssignSubject" element={<AssignSubject/>}/>

    <Route path='/OurProfile' element={<OurProfile/>} />

    <Route path='/StudentCategory' element={<StudentCategory/>} />
    <Route path='/AddStudent' element={<AddStudent/>}/>
    <Route path='/StudnetList' element={<StudentList/>}/>  
    <Route path='/GenrateId' element={<GenrateId/>} /> 
    <Route path='/StudentAttendance' element={<StudentAttendance/>} />
    <Route path="*" element={<Error />} />

    <Route path='/TeacherReport' element={<TeacehrReport/>} />
    <Route path='/ClassTeacher' element={<ClassTeacher/>} />
    <Route path='/AddTeacher' element={<AddTeacher/>} />

    <Route path='/StaffReport' element={<StaffReport/>} />
    <Route path='/StaffAssign' element={<AssignStaff/>} />
    <Route path='/AddStaff' element={<AddStaff/>} />

    <Route path='/AddClass' element={<AddClass/>} />

    <Route path='/AdmissionList' element={<AdmissionList/>} />
    <Route path='/NewAdmission' element={<NewAdmission/>}/>

    <Route path='/StaffSalary' element={<StaffSalary/>} />
    <Route path='/FeeGroup' element={<FeeGroup/>} />
    <Route path='/FeeType' element={<FeeType/>}/>
    <Route path='/FeeInvoice' element={<FeesInvoice/>}/>

    <Route path='/ResetPassword' element={<ResetPassword/>} />

    <Route path='/TeacherDashboard' element={<TeacherDashboard/>} />
    <Route path='/StudentProfile' element={<StudentProfile/>} />
    <Route path="/TeacherToDo" element={<TeacherToDo />} />
    <Route path="/TeacherHomework-AddHW" element={<TeacherHomeworkAddHW />} />
    <Route path="/TeacherHomework-Report" element={<TeacherHomeworkReport />} />
    <Route path='/TeacherHomework-List' element={<TeacherHomeworkList/>}/>

          <Route path='/Notice' element={<Notice />} />
          <Route path='/Resources-ContentUpload' element={<ContentResources />} />
          <Route path='/TopicResources' element={<TopicResources />} />
          <Route path='/LessonResources' element={<LessonResources />} />
</Routes>


         
       

      </div>
    </>
  )
}

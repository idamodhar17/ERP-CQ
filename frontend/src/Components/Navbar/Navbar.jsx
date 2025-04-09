import React, { useState } from 'react';
import { Search, Bell, CircleUserRound } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Error from '../ERROR/Error'
import './Navbar.css';
import AdminDashboard from '../ADMIN/AdminDashboard/AdminDashboard';
import StudentReport from '../ADMIN/StudentReport/StudentReport';
import SubjectAssign from '../ADMIN/Subject/SubjectAssign';
import ClassTeacher from '../ADMIN/Assing Class Teacher/ClassTeacher';
// import './App.css';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const today = new Date();
    const formatted = today.toISOString().split('T')[0];




    return (
        <div className="container text-blue-400">
            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? '' : 'hidden'}`}>
                <h2>InfixEdu Menu</h2>
                <ul className='text-sm'>
                    <li>
                        <Link to="/Admin-Dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <details>
                            <summary>Student Management</summary>
                            <ul>
                                <li className=""><Link to="/Student-Report">Studnet Report</Link></li>
                                <li className="">Assign students </li>
                                <li className="">Generate admission ID</li>
                                <li className="">Student fee</li>
                                <li className="">Student Attendance</li>
                                <li className="">Student History</li>

                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Teacher Management</summary>
                            <ul>
                                <li className="">Teacher Record</li>
                                <li className="">Assign Teacher </li>
                                <li className="">Subject List</li>
                                <li className="">Teacher Roll</li>
                                <li className="">Teacher History</li>

                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Staff Management</summary>
                            <ul>
                                <li className="">Staff Record</li>
                                <li className="">Assign Rolls</li>
                                <li className="">Staff Salary</li>

                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Class Management</summary>
                            <ul>
                                <li className="">Create Class</li>
                                <li className="">Assign Teacher</li>
                                <li className="">Assign Student</li>
                                <li className="">TimeTable</li>


                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Subject Management</summary>
                            <ul>
                                <li className=""><Link to="/Subject">Assign Subject</Link></li>
                                <li className="">Subject Teacher</li>
                                <li className=""><Link to="/ClassTeacher">Assign Class Teacher</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Admission Process</summary>
                            <ul>
                                <li className="">Admission Record</li>
                                <li className="">New Admission</li>
                                <li className="">Staff Salary</li>

                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>Fee Management</summary>
                            <ul>
                                <li className="">Student Fees</li>
                                <li className="">Teacher Payment</li>
                                <li className="">Staff Salary</li>

                            </ul>
                        </details>
                    </li>

                    <li>
                        Broadcast Notices
                    </li>

                    <li>
                        Homework
                    </li>

                    <li>
                        Password Management
                    </li>

                    <li>
                        Academic Calendar
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className={`main ${isSidebarOpen ? '' : 'full'}`}>
                <div className="topnav-grid">
                    <button className="hamburger-btn" onClick={toggleSidebar}>
                        &#9776;
                    </button>

                    <div className="search-box">
                        <Search className="icon" />
                        <input type="text" placeholder="Search..." />
                    </div>

                    <div className="search-box">
                        <Search className="icon" />
                        <input type="text" placeholder="Name/Admission No" />
                    </div>

                    <div className="date-display">
                        {formatted}
                    </div>

                    <div className="icon-wrapper">
                        <Bell />
                    </div>

                    <div className="icon-wrapper">
                        <CircleUserRound />
                    </div>
                </div>

                
                <div className="mx-5 p-4">

                        
                    <Routes>
                        <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
                        <Route path="/Student-Report" element={<StudentReport />} />
                        <Route path="/Subject" element={<SubjectAssign/>}/>
                        <Route path='/ClassTeacher' element={<ClassTeacher/>} />
                        <Route path="*" element={<Error />} />
                    </Routes>



                </div>

                

            </div>



        </div>
    );
}

export default App;

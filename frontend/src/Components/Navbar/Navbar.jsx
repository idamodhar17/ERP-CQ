import React, { useState } from 'react';
import { Search, Bell, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import FrontendRoute from '../Routes/FrontendRoute';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [userRole, setUserRole] = useState("accout"); // Change this to "teacher" to test teacher view

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const today = new Date();
    const formatted = today.toISOString().split('T')[0];

    return (
        <div className="container text-blue-400">
            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? '' : 'hidden'}`}>
                <h2>Codequell</h2>

                {(userRole === "admin") && (

                    <ul className='text-sm'>

                        <li><Link to="/Admin-Dashboard">Dashboard</Link></li>

                        {/* STUDENT SECTION */}

                        <li>
                            <details>
                                <summary>Student Management</summary>
                                <ul>
                                    <li><Link to="/Student-Report">Student Report</Link></li>

                                    <>
                                        <li><Link to="/StudentCategory">Student Category</Link></li>
                                        <li><Link to="/AddStudent">Add Students</Link></li>
                                        <li><Link to="/StudnetList">Student List</Link></li>
                                        <li className=""><Link to="/StudentProfile">Student Profile</Link></li>
                                        <li><Link to="/GenrateId">Generate Admission ID</Link></li>
                                        <li><Link to="/StudentAttendance">Student Attendance</Link></li>
                                    </>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary>Teacher Management</summary>
                                <ul>
                                    <li><Link to="/TeacherReport">Teacher Report</Link></li>
                                    <li><Link to="/ClassTeacher">Assign Class Teacher</Link></li>
                                    <li><Link to="/AddTeacher">Add Teacher</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary>Staff Management</summary>
                                <ul>
                                    <li><Link to="/StaffReport">Staff Report</Link></li>
                                    <li><Link to="/StaffAssign">Assign Rolls</Link></li>
                                    <li><Link to="/AddStaff">Add Staff</Link></li>
                                </ul>
                            </details>
                        </li>



                        <li>
                            <details>
                                <summary>Class Management</summary>
                                <ul>
                                    <li><Link to="/AddClass">Create Class</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary>Subject Management</summary>
                                <ul>
                                    <li><Link to="/Subject">Add Subject</Link></li>
                                    <li><Link to="/AssignSubject">Assign Subject</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary>Admission Process</summary>
                                <ul>
                                    <li><Link to="/AdmissionList">Admission List</Link></li>
                                    <li><Link to="/NewAdmission">New Admission</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary>Fee Management</summary>
                                <ul>
                                    <li><Link to="/FeeGroup">Fee Group</Link></li>
                                    <li><Link to="/FeeType">Fee Type</Link></li>
                                    <li><Link to="/FeeInvoice">Fees Invoice</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary>Home Work</summary>
                                <ul>
                                    <li><Link to="/TeacherHomework-AddHW">Add Homework</Link></li>
                                    <li><Link to="/TeacherHomework-List">Homework List</Link></li>
                                    <li><Link to="/TeacherHomework-Report">Homework Report</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li>Broadcast Notices</li>

                        <li><Link to="/ResetPassword">Password Management</Link></li>




                    </ul>

                )}


                {userRole === "accout" && (
                    <ul className='text-sm'>

                        <li><Link to="/TeacherDashboard">Dashboard</Link></li>

                        <li>
                            <details>
                                <summary>Fee Management</summary>
                                <ul>
                                    <li><Link to="/FeeGroup">Fee Group</Link></li>
                                    <li><Link to="/FeeType">Fee Type</Link></li>
                                    <li><Link to="/FeeInvoice">Fees Invoice</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li className=""><Link to="/StaffSalary">Staff Salary</Link></li>

                        <li className=""><Link to="/StudentProfile">Student Profile</Link></li>

                        <li className=""><Link to="">Broadcast Notices</Link></li>



                        <li>
                            <details>
                                <summary>Home Work</summary>
                                <ul>
                                    <li><Link to="/TeacherHomework-AddHW">Add Homework</Link></li>
                                    <li><Link to="/TeacherHomework-List">Homework List</Link></li>
                                    <li><Link to="/TeacherHomework-Report">Homework Report</Link></li>
                                </ul>
                            </details>
                        </li>


                    </ul>
                )}





                {/* BROADCAST + PASSWORD (Admin only) */}
                {userRole === "teacher" && (
                    <ul className='text-sm'>

                        <li><Link to="/TeacherDashboard">Dashboard</Link></li>

                        <li className=""><Link to="/StudentReport">Student Report</Link></li>

                        <li className=""><Link to="/StudentProfile">Student Profile</Link></li>

                        <li className=""><Link to="/StudentAttendance">Student Attendance</Link></li>

                        <li className=""><Link to="">Resourse</Link></li>

                        <li className=""><Link to="">Broadcast Notices</Link></li>



                        <li>
                            <details>
                                <summary>Home Work</summary>
                                <ul>
                                    <li><Link to="/TeacherHomework-AddHW">Add Homework</Link></li>
                                    <li><Link to="/TeacherHomework-List">Homework List</Link></li>
                                    <li><Link to="/TeacherHomework-Report">Homework Report</Link></li>
                                </ul>
                            </details>
                        </li>


                    </ul>
                )}

                {userRole === "parent" && (
                    <ul className='text-sm'>

                        <li className=""><Link to="/OurProfile">Profile</Link></li>

                        <li className=""><Link to="/StudentAttendance">Student Attendance</Link></li>

                        <li className=""><Link to="">Resourse</Link></li>

                        <li className=""><Link to="">Broadcast Notices</Link></li>



                        <li>
                            <details>
                                <summary>Home Work</summary>
                                <ul>
                                    <li><Link to="/TeacherHomework-AddHW">Add Homework</Link></li>
                                    <li><Link to="/TeacherHomework-List">Homework List</Link></li>
                                    <li><Link to="/TeacherHomework-Report">Homework Report</Link></li>
                                </ul>
                            </details>
                        </li>


                    </ul>
                )}

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

                    <div className="date-display">{formatted}</div>

                    <div className="icon-wrapper"><Bell /></div>
                    <Link to="/OurProfile"><div className="icon-wrapper"><CircleUserRound /></div></Link>
                </div>

                <FrontendRoute />
            </div>
        </div>
    );
}

export default App;

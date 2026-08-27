import React from 'react'
import { Link } from 'react-router-dom'

export default function NewAdmission() {
  return (
   <>
   
            <section className="">
                <div className="">
                    <h1 className="text-2xl">New Admission</h1>

                    <div className="shadow-lg p-6 mt-10">
                        <div className="grid grid-cols-3 items-center gap-10">
                           <Link to="/AddStudent" className="">
                           <div to=""><img src="/Images/Student.png" alt="AddStudent" className="" /></div>
                           <h2 className="text-lg font-semibold text-center">Add Student</h2>
                           </Link>

                           <Link to="/AddTeacher" className="">
                           <div to=""><img src="/Images/Teacher.png" alt="AddTeacher" className="" /></div>
                           <h2 className="text-lg font-semibold text-center">Add Teacher</h2>
                           </Link>

                           <Link to="/AddStaff" className="">
                           <div to=""><img src="/Images/Staff.png" alt="AddStaff" className="" /></div>
                           <h2 className="text-lg font-semibold text-center">Add Staff</h2>
                           </Link>
                        </div>
                    </div>
                </div>
            </section>

   
   </>
  )
}

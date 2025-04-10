import React from 'react'
import { Search, Sheet, Copy, FileText   } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function StudentList() {
  return (
    <>
    
    <section className="">
            <div className="">

                <h1 className="text-2xl">Studnet List</h1>

            </div>
            <div className="shadow-lg p-6 mt-2 flex flex-col gap-6">
               <div className="flex justify-between items-center">
               <h1 className="text-lg ">Select Criteria</h1>
               <button className='bg-blue-600 text-white py-1 px-6 rounded-xl'><Link to="/AddStudent">+ Assign Student</Link></button>

               </div>

                <div className="grid grid-cols-5 items-center gap-5  ">

                <div className="flex flex-col gap-2 text-gray-500 ">
                        <label className='text-gray-500'>Academic Year</label>
                        <select name="" id="" className='px-6 py-2  border-2 border-gray-300 rounded-sm'>
                          <option value="" className='' >2025</option>
                          <option value="" className='' >2026</option>
                          <option value="" className='' >2027</option>
                          <option value="" className='' >2028</option>
                          
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-500 ">
                        <label className='text-gray-500'>Class</label>
                        <select name="" id="" className='px-6 py-2  border-2 border-gray-300 rounded-sm'>
                          <option value="" className='' >Class 1</option>
                          <option value="" className='' >Class 2</option>
                          <option value="" className='' >Class 3</option>
                          <option value="" className='' >Class 4</option>
                          <option value="" className='' >Class 5</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-500 ">
                        <label className='text-gray-500'>Section</label>
                        <select name="" id="" className='px-6 py-2  border-2 border-gray-300 rounded-sm'>
                          <option value="" className='hover:bg-gray-500' >Class 1</option>
                          <option value="" className='hover:bg-gray-500' >Class 2</option>
                          <option value="" className='hover:bg-gray-500' >Class 3</option>
                          <option value="" className='hover:bg-gray-500' >Class 4</option>
                          <option value="" className='hover:bg-gray-500' >Class 5</option>
                        </select>
                    </div>

                  

                    <div className="flex flex-col gap-2 text-gray-500 ">
                        <label className='text-gray-500'>Search by Name</label>
                        <input type="text" className='border-2 border-gray-400 px-4 py-1 rounded-sm ' placeholder='Name' />
                        
                    </div>

                    <div className="flex flex-col gap-2 text-gray-500 ">
                        <label className='text-gray-500'>Search by Roll No</label>
                        <input type="text" className='border-2 border-gray-400 px-4 py-1 rounded-sm ' placeholder='Roll No.' />
                        
                    </div>

                </div>

                <div className="flex justify-end items-center">
                  <button className='flex justify-center items-center gap-4 text-white px-10 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-blue-700'><Search/> Search</button>
                </div>
            </div>

            <div className=" mt-10 shadow-lg p-4">
              <div className="grid grid-cols-3 items-center">
                <div className="">
                  <h1 className="">Stundet Report</h1>
                </div>

                <div className="flex items-center gap-2 ">
                    <Search/>
                    <input type="text" className='border-b-2 border-b-blue-200 outline-0 px-4 py-1 ' placeholder='Search...' />
                </div>

                <div className="flex items-center justify-self-center gap-6 border-2 border-blue-300 px-10 py-2 rounded-2xl">
                <button type="button" className='text-blue-500 hover:text-blue-700 '><Copy/></button>
                      <button type="button" className='text-blue-500  hover:text-blue-700 border-x-2 border-x-blue-400 px-3'><Sheet/></button>
                      <button type="button" className='text-blue-500 hover:text-blue-700 '><FileText/></button>
                </div>
              </div>

              <div className="w-full mt-6">
                <table className='w-full'>
                  <thead className='bg-gray-100 py-2'>
                      <td className="p-2">Class</td>
                      <td className="">Section</td>
                      <td className="">Admission No</td>
                      <td className="">Name</td>
                      <td className="">Father Name</td>
                      <td className="">Date Of Birth</td>
                      <td className="">Gender</td>
                      <td className="">Type</td>
                      <td className="">Phone</td>
                  </thead>
                  <tbody className=''>
                      <tr className="border-b-2 border-b-gray-200">
                        <td className="p-2">Class 1</td>
                        <td className="">A</td>
                        <td className="">000001</td>
                        <td className="">Hello</td>
                        <td className="">World</td>
                        <td className="">20th Jan 2000</td>
                        <td className="">Male</td>
                        <td className="">Normal</td>
                        <td className="">1234567890</td>
                      </tr>

                      <tr className="border-b-2 border-b-gray-200">
                        <td className="p-2">Class 1</td>
                        <td className="">A</td>
                        <td className="">000001</td>
                        <td className="">Hello</td>
                        <td className="">World</td>
                        <td className="">20th Jan 2000</td>
                        <td className="">Male</td>
                        <td className="">Normal</td>
                        <td className="">1234567890</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </section>

    </>
  )
}

import React from 'react'
import { Search, Sheet, Copy, FileText   } from 'lucide-react'


export default function StudentAttendance() {
  return (
    <>
    
    <section className="">
            <div className="">

                <h1 className="text-2xl">Studnet Attendace</h1>

            </div>
            <div className="shadow-lg p-6 mt-2 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                <h1 className="text-lg ">Select Criteria</h1>
                <button className='bg-blue-600 text-white py-1 px-6 rounded-xl'>Import Subject</button>

                </div>

                <div className="grid md:grid-cols-3 items-center gap-5  ">

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

                    <div className="flex flex-col gap-2 text-gray-500  ">
                        <label className='text-gray-500'>Date</label>
                        <input type="date" name="" id="" className='px-6 py-2 w-full  border-2 border-gray-300 rounded-sm' />
                        
                    </div>

                    

                </div>

                <div className="flex justify-end items-center">
                  <button className='flex justify-center items-center gap-4 text-white px-10 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-blue-700'><Search/> Search</button>
                </div>
            </div>

            <div className=" mt-10 shadow-lg p-4">
              <div className="grid md:grid-cols-3 max-md:gap-4 items-center">
                <div className="">
                  <h1 className="">Stundet Attendance</h1>
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

              <form action="" className='overflow-x-auto max-md:mt-4'>
              <table className='w-full table-auto border-collapse overflow-x-auto max-md:mt-4'>
  <thead className='bg-gray-100'>
    <tr>
      <th className="text-left p-3">Admission No</th>
      <th className="text-left p-3">Name</th>
      <th className="text-left p-3">Roll No</th>
      <th className="text-left p-3">Attendance</th>
      <th className="text-left p-3">Notice</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b-2 border-gray-200">
      <td className="p-3">000001</td>
      <td className="p-3">ABC</td>
      <td className="p-3">001</td>
      <td className="p-3">
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-1">
            <input type="radio" name="Attend1" /> Present
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="Attend1" /> Absent
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="Attend1" /> Leave
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="Attend1" /> Holiday
          </label>
        </div>
      </td>
      <td className="p-3">
        <input
          type="text"
          className="border border-gray-300 px-3 py-1 rounded-sm w-full"
        />
      </td>
    </tr>

    {/* Duplicate for other students */}
  </tbody>
</table>


              <div className="flex justify-center items-center py-6">
                <button className='bg-gradient-to-r to-blue-600 from-blue-400 px-6 py-2 text-white rounded-sm'>Save Attendace</button>
              </div>
              </form>
            </div>
        </section>
    
    </>
  )
}

import { Search } from "lucide-react";
import { Copy, FileText, Sheet } from 'lucide-react';
import { useState } from "react";

function TeacherHomeworkReport() {

  const [show, setShow] = useState(false)

  return (
    <div className="TeacherHomeworkReport">
      <h1 className="p-2">Homework Report</h1>
      <div className="grid grid-cols-4 items-center gap-5 text-gray-500 ">
        <div className="flex flex-col gap-2 text-gray-500 ">
          <label className='text-gray-500'>CLASS</label>
          <select name="" id="" className='px-6 py-2  border-2 border-gray-300 rounded-sm'>
            <option value="" className='' >Select Class</option>
            <option value="" className='' >Class 1</option>
            <option value="" className='' >Class 2</option>
            <option value="" className='' >Class 3</option>
            <option value="" className='' >Class 4</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 text-gray-500 ">
          <label className='text-gray-500'>SUBJECT</label>
          <select name="" id="" className='px-6 py-2  border-2 border-gray-300 rounded-sm'>
            <option value="" className='hover:bg-gray-500' >Select Subject</option>
            <option value="" className='hover:bg-gray-500' >Subject 1</option>
            <option value="" className='hover:bg-gray-500' >Subject 2</option>
            <option value="" className='hover:bg-gray-500' >Subject 3</option>
            <option value="" className='hover:bg-gray-500' >Subject 4</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 text-gray-500 ">
          <label className='text-gray-500'>SECTION</label>
          <select name="" id="" className='px-6 py-2  border-2 border-gray-300 rounded-sm'>
            <option value="" className='' >Select Section</option>
            <option value="" className='' >Section 1</option>
            <option value="" className='' >Section 2</option>
            <option value="" className='' >Section 3</option>
            <option value="" className='' >Section 4</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Admission Date</label>
          <input type="date" className="w-full border p-2 rounded" />
        </div>


      </div>
      <div className="flex justify-end items-center  mt-4">
        <button className='flex  items-center gap-4 text-white px-8 py-1 rounded-lg bg-gradient-to-r from-blue-400 to-blue-700 '
          onClick={() => { setShow(!show) }}
        ><Search /> SEARCH</button>
      </div>
{
  show && (
      <div className=" mt-10 shadow-lg p-4">
        <div className="grid grid-cols-3 items-center">
          <div className="">
            <h1 className="">Stundet Report</h1>
          </div>

          <div className="flex items-center gap-2 ">
            <Search />
            <input type="text" className='border-b-2 border-b-blue-200 outline-0 px-4 py-1 ' placeholder='Search...' />
          </div>

          <div className="flex items-center justify-self-center gap-6 border-2 border-blue-300 px-10 py-2 rounded-2xl">
            <button type="button" className='text-blue-500 hover:text-blue-700 '><Copy /></button>
            <button type="button" className='text-blue-500  hover:text-blue-700 border-x-2 border-x-blue-400 px-3'><Sheet /></button>
            <button type="button" className='text-blue-500 hover:text-blue-700 '><FileText /></button>
          </div>
        </div>

        <div className="w-full mt-6">
          <table className='w-full'>
            <thead className='bg-gray-100 py-2'>
              <td className="p-2">Student Name</td>
              <td className="">Class</td>
              <td className="">Subject</td>
              <td className="">Marks</td>
              <td className="">Submition Data</td>
              <td className="">Evaluation Date</td>
              <td className="">Evaluated By</td>
              <td className="">Status</td>

            </thead>
            <tbody className=''>
              <tr className="border-b-2 border-b-gray-200">
                <td className="p-2">Krishna Kadukar</td>
                <td className="">Class5(B)</td>
                <td className="">Subject 1</td>
                <td className="">99</td>
                <td className="">1st Jan 2000</td>
                <td className="">20th Jan 2000</td>
                <td className="">Name 1</td>
                <td className=""><button>Completed</button></td>
              </tr>

              <tr className="border-b-2 border-b-gray-200">
                <td className="p-2">Krishna Kadukar</td>
                <td className="">Class5(B)</td>
                <td className="">Subject 1</td>
                <td className="">99</td>
                <td className="">1st Jan 2000</td>
                <td className="">20th Jan 2000</td>
                <td className="">Name 1</td>
                <td className=""><button>Completed</button></td>
              </tr>

              <tr className="border-b-2 border-b-gray-200">
                <td className="p-2">Krishna Kadukar</td>
                <td className="">Class5(B)</td>
                <td className="">Subject 1</td>
                <td className="">99</td>
                <td className="">1st Jan 2000</td>
                <td className="">20th Jan 2000</td>
                <td className="">Name 1</td>
                <td className=""><button>Completed</button></td>
              </tr>

              <tr className="border-b-2 border-b-gray-200">
                <td className="p-2">Krishna Kadukar</td>
                <td className="">Class5(B)</td>
                <td className="">Subject 1</td>
                <td className="">99</td>
                <td className="">1st Jan 2000</td>
                <td className="">20th Jan 2000</td>
                <td className="">Name 1</td>
                <td className=""><button>Completed</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ) 
     }
    </div>
  );
}

export default TeacherHomeworkReport;
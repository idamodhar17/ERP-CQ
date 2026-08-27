import { Copy, FileText, Sheet , Search } from 'lucide-react';
import { useState } from "react";

function TeacherHomeworkList() {

    const [show, setShow] = useState(false)

    return (
        <div className="TeacherHomeworkList-Page">
            <div className="flex justify-between">
                <h1 className="p-2">Homework List</h1>
                <button className=" text-white bg-blue-500 rounded-lg px-3 py-1">+ Add Homework</button>
            </div>
            <div className="grid md:grid-cols-3 items-center gap-5 text-gray-500 ">
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



            </div>
            <div className="flex justify-end items-center  mt-4">
                <button className='flex  items-center gap-4 text-white px-8 py-1 rounded-lg bg-gradient-to-r from-blue-400 to-blue-700 '
                    onClick={() => { setShow(!show) }}
                ><Search /> SEARCH</button>
            </div>
            {
  show && (
            <div className=" mt-10 shadow-lg p-4">
                <div className="grid md:grid-cols-3 max-md:gap-2 items-center">
                    <div className="">
                        <h1 className="">Homework List</h1>
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

                <div className="w-full mt-6 overflow-x-auto">
                    <table className='w-full border-separate border-spacing-x-4 border-spacing-y-0'>
                        <thead className='bg-gray-100 py-2'>
                            <td className="p-2">SL</td>
                            <td className="">Class</td>
                            <td className="">Section</td>
                            <td className="">Subject</td>
                            <td className="">Marks</td>
                            <td className="">Homework Date</td>
                            <td className="">Submition Date</td>
                            <td className="">Evalution Date</td>
                            <td className="">Created By</td>

                        </thead>

                    </table>
                </div>
            </div>
                ) 
            }
        </div>
    );
}

export default TeacherHomeworkList;
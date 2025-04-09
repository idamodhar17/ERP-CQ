import { Check  } from "lucide-react";

function TeacherHomeworkReport() {
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
                    <button className='flex  items-center gap-4 text-white px-8 py-1 rounded-lg bg-gradient-to-r from-blue-400 to-blue-700 '><Check  /> SAVE HOMEWORK</button>
                </div>
        </div>
    );
}

export default TeacherHomeworkReport;
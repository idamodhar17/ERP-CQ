import { Check  } from "lucide-react";

function TeacherHomeworkAddHW() {
    return (
        <div className="TeacherHomeworkAddHW-Page">
            <h1> Add Homework </h1>
            <div className="shadow-lg p-6 mt-2 flex flex-col gap-6">
                <h1 className="text-lg ">Add Homework</h1>

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

                    <div>
                        <label className="block mb-1">Admission Date</label>
                        <input type="date" className="w-full border p-2 rounded" />
                    </div>
                    <div>
                        <label className="block mb-1">Admission Date</label>
                        <input type="date" className="w-full border p-2 rounded" />
                    </div>
                    <div>
                        <label className="block mb-1">MARKS</label>
                        <input type="text" className="px-6 py-2  border-2 w-full border-gray-300 rounded-sm" placeholder="Enter Marks" />
                    </div>
                </div>

                <div>
                    <label className="block mb-1 text-gray-500">ATTACH FILE</label>
                   < input type="file" className=" border p-2 rounded text-gray-500"  />
                </div>
                <div>
                    <label className="block mb-1 text-gray-500">DESCRIPTION</label>
                    <textarea className="border w-full p-5 rounded text-gray-500" rows="3" placeholder="Enter Description"></textarea>
                </div>

                <div className="flex justify-center items-center ">
                    <button className='flex justify-center items-center gap-4 text-white px-10 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-blue-700 '><Check  /> SAVE HOMEWORK</button>
                </div>

            </div>
        </div>
    );
}

export default TeacherHomeworkAddHW;
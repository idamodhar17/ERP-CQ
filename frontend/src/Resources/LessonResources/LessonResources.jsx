import '../LessonResources/LessonResources.css'
import { Copy, FileText, Sheet, Search } from 'lucide-react';

function LessonResources() {
    return (
        <div className="LessonResources-Page">
            <h1>Add Topic</h1>
            < div className="LessonResources-MainPage">
                <div className="LessonResources-left">
                    <h1>Add Topic</h1>
                    <div className="LessonResources-class">
                        <label>Class</label>
                        <select>
                            <option>Select Class</option>
                            <option>Class 1</option>
                            <option>Class 2</option>
                            <option>Class 3</option>
                            <option>Class 4</option>
                        </select>
                    </div>
                    <div className="LessonResources-section">
                        <label>Section</label>
                        <select>
                            <option>Select Section</option>
                            <option>Section 1</option>
                            <option>Section 2</option>
                            <option>Section 3</option>
                            <option>Section 4</option>
                        </select>
                    </div>
                    <div className="LessonResources-subject">
                        <label>Subject</label>
                        <select>
                            <option>Select Subject</option>
                            <option>Subject 1</option>
                            <option>Subject 2</option>
                            <option>Subject 3</option>
                            <option>Subject 4</option>
                        </select>
                    </div>
                    <div className="LessonResources-lesson">
                        <label>Lesson</label>
                        <select>
                            <option>Select Lesson</option>
                            <option>Lesson 1</option>
                            <option>Lesson 2</option>
                            <option>Lesson 3</option>
                            <option>Lesson 4</option>
                        </select>
                    </div>
                    <div className="LessonResources-title">
                        <label>Add Lesson Name</label>
                        <input type="text" placeholder="Title" />
                    </div>

                    <div className="text-gray-400 flex flex-col gap-2 mt-2">
                        <label>Upload Content </label>
                        <input type="file" placeholder="Title" className='bg-blue-400 text-white py-2 px-6 border-2 rounded-2xl border-black' />
                    </div>


                    <div className='LessonResources-btn'>
                        <button>Save lesson</button>
                    </div>
                </div>
                <div className="ContentResources-right">
                    <div className=" mt-10 shadow-lg p-4">
                        <div className="grid grid-cols-3 items-center">
                            <div className="">
                                <h1 className="">Add Topics</h1>
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
                                    <td className="p-2">SL</td>
                                    <td className="">Class</td>
                                    <td className="">Section</td>
                                    <td className="">Subject</td>
                                    <td className="">Lesson</td>  
                                    <td className="">Topic</td>     
                                    <td className="">Action</td>

                                </thead>
                                <tbody className='text-gray-500'>
                                  <tr className='flex justify-center  py-2'>No data available     </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessonResources;
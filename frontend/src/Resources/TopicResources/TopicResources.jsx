import '../TopicResources/TopicResources.css'
import { Copy, FileText, Sheet, Search } from 'lucide-react';

function TopicResources() {
    return (
        <div className="TopicResources-Page">
            <h1>Add Lesson</h1>
            < div className="TopicResources-MainPage">
                <div className="TopicResources-left">
                    <h1>Add Lesson</h1>
                    <div className="TopicResources-class">
                        <label>Class</label>
                        <select>
                            <option>Select Class</option>
                            <option>Class 1</option>
                            <option>Class 2</option>
                            <option>Class 3</option>
                            <option>Class 4</option>
                        </select>
                    </div>
                    <div className="TopicResources-section">
                        <label>Section</label>
                        <select>
                            <option>Select Section</option>
                            <option>Section 1</option>
                            <option>Section 2</option>
                            <option>Section 3</option>
                            <option>Section 4</option>
                        </select>
                    </div>
                    <div className="TopicResources-subject">
                        <label>Subject</label>
                        <select>
                            <option>Select Subject</option>
                            <option>Subject 1</option>
                            <option>Subject 2</option>
                            <option>Subject 3</option>
                            <option>Subject 4</option>
                        </select>
                    </div>
                    <div className="TopicResources-title">
                        <label>Add Lesson Name</label>
                        <input type="text" placeholder="Title" />
                    </div>

                    <div className="text-gray-400 flex flex-col gap-2 mt-2">
                        <label>Upload Content </label>
                        <input type="file" placeholder="Title" className='bg-blue-400 text-white py-2 px-6 border-2 rounded-2xl border-black' />
                    </div>


                    <div className='TopicResources-btn'>
                        <button>Save lesson</button>
                    </div>
                </div>
                <div className="ContentResources-right">
                    <div className=" mt-10 shadow-lg p-4">
                        <div className="grid grid-cols-3 items-center">
                            <div className="">
                                <h1 className="">Add Lesson</h1>
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
                            <table className='w-full border-collapse table-auto'>
                                <thead className='bg-gray-100 py-2'>
                                    <td className="p-2">SL</td>
                                    <td className="">Class</td>
                                    <td className="">Section</td>
                                    <td className="">Subject</td>
                                    <td className="">Lesson</td>
                                    <td className="">Action</td>

                                </thead>
                                <tbody className='text-gray-500'>
                                    <tr className="border-b-2 border-b-gray-200">
                                        <td className="p-2">1</td>
                                        <td className="">Class 1</td>
                                        <td className="">A</td>
                                        <td className="">Subject 1</td>
                                        <td className="">Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                                        <td>
                                            <div className="relative group inline-block">
                                                <button className="select px-6 border-2 border-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white">
                                                    select
                                                </button>
                                                <ul className="action bg-gray-100 p-4 flex-col gap-2 shadow-2xl absolute w-full pt-2 hidden group-hover:flex z-10">
                                                    <li className="hover:bg-gray-200 p-2">
                                                        <button >Edit</button>
                                                    </li>
                                                    <li className="hover:bg-gray-200 p-2">
                                                        <button>Delete</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b-2 border-b-gray-200">
                                        <td className="p-2">1</td>
                                        <td className="">Class 1</td>
                                        <td className="">A</td>
                                        <td className="">Subject 1</td>
                                        <td className="">Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                                        <td>
                                            <div className="relative group inline-block">
                                                <button className="select px-6 border-2 border-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white">
                                                    select
                                                </button>
                                                <ul className="action bg-gray-100 p-4 flex-col gap-2 shadow-2xl absolute w-full pt-2 hidden group-hover:flex z-10">
                                                    <li className="hover:bg-gray-200 p-2">
                                                        <button >Edit</button>
                                                    </li>
                                                    <li className="hover:bg-gray-200 p-2">
                                                        <button>Delete</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b-2 border-b-gray-200">
                                        <td className="p-2">1</td>
                                        <td className="">Class 1</td>
                                        <td className="">A</td>
                                        <td className="">Subject 1</td>
                                        <td className="">Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                                        <td>
                                            <div className="relative group inline-block">
                                                <button className="select px-6 border-2 border-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white">
                                                    select
                                                </button>
                                                <ul className="action bg-gray-100 p-4 flex-col gap-2 shadow-2xl absolute w-full pt-2 hidden group-hover:flex z-10">
                                                    <li className="hover:bg-gray-200 p-2">
                                                        <button >Edit</button>
                                                    </li>
                                                    <li className="hover:bg-gray-200 p-2">
                                                        <button>Delete</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b-2 border-b-gray-200">
                                        <td className="p-2">1</td>
                                        <td className="">Class 1</td>
                                        <td className="">A</td>
                                        <td className="">Subject 1</td>
                                        <td className="">Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                                        <td>
                                            <div className="relative group inline-block">
                                                <button className="select px-6 border-2 border-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white">
                                                    select
                                                </button>
                                                <ul className="action bg-gray-100 p-4 flex-col gap-2 shadow-2xl absolute w-full pt-2 hidden group-hover:flex z-10">
                                                    <li className="hover:bg-gray-200 p-2">
                                                        <button >Edit</button>
                                                    </li>
                                                    <li className="hover:bg-gray-200 p-2">
                                                        <button>Delete</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b-2 border-b-gray-200">
                                        <td className="p-2">1</td>
                                        <td className="">Class 1</td>
                                        <td className="">A</td>
                                        <td className="">Subject 1</td>
                                        <td className="">Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                                        <td>
                                            <div className="relative group inline-block">
                                                <button className="select px-6 border-2 border-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white">
                                                    select
                                                </button>
                                                <ul className="action bg-gray-100 p-4 flex-col gap-2 shadow-2xl absolute w-full pt-2 hidden group-hover:flex z-10">
                                                    <li className="hover:bg-gray-200 p-2">
                                                        <button >Edit</button>
                                                    </li>
                                                    <li className="hover:bg-gray-200 p-2">
                                                        <button>Delete</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default TopicResources;
import '../ContentResources/ContentResources.css'
import { Copy, FileText, Sheet, Search } from 'lucide-react';

function ContentResources() {
    return (
        <div className="ContentResources-Page">
            <h1>Upload Content list</h1>
            <div className="ContentResources-MainPage">
                <div className="ContentResources-left">
                    <h1>Upload Content</h1>
                    <div className="ContentResources-title">
                        <label>Content Title</label>
                        <input type="text" placeholder="Title" />
                    </div>
                    <div className="ContentResources-type">
                        <label>Content Type</label>
                        <select>
                            <option>Select Type</option>
                            <option>Type 1</option>
                            <option>Type 2</option>
                            <option>Type 3</option>
                            <option>Type 4</option>
                        </select>
                    </div>
                    <div className="ContentResources-available">
                        <label>Available For</label>
                        <div className='ContentResources-radio'> <input type="radio" />All Admin </div>
                        <div className='ContentResources-radio'> <input type="radio" />Students </div>
                        <div className='ContentResources-radio'> <input type="radio" />Available for all classes </div>
                    </div>
                    <div className="ContentResources-class">
                        <label>Class</label>
                        <select>
                            <option>Select Class</option>
                            <option>Class 1</option>
                            <option>Class 2</option>
                            <option>Class 3</option>
                            <option>Class 4</option>
                        </select>
                    </div>
                    <div className="ContentResources-section">
                        <label>Section</label>
                        <select>
                            <option>Select Section</option>
                            <option>Section 1</option>
                            <option>Section 2</option>
                            <option>Section 3</option>
                            <option>Section 4</option>
                        </select>
                    </div>
                </div>
                <div className="ContentResources-right">
                    <div className=" mt-10 shadow-lg p-4">
                        <div className="grid grid-cols-3 items-center">
                            <div className="">
                                <h1 className="">Uploaded Content list</h1>
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
                                    <td className="">Content Title</td>
                                    <td className="">Type</td>
                                    <td className="">Date</td>
                                    <td className="">Available For</td>
                                    <td className="">Class(Section)</td>
                                    <td className="">Action</td>

                                </thead>
                                <tbody className='text-gray-500'>
                                    <tr className="border-b-2 border-b-gray-200">
                                        <td className="p-2">1</td>
                                        <td className="">Lorem ipsum dolor sit amet.</td>
                                        <td className="">Type 1</td>
                                        <td className="">1st Jan 2000</td>
                                        <td className="">All Admin </td>
                                        <td className="">Class 1 (A)</td>
                                        <td className=""><button>Select</button></td>
                                    </tr>
                                    <tr className="border-b-2 border-b-gray-200">
                                        <td className="p-2">1</td>
                                        <td className="">Lorem ipsum dolor sit amet.</td>
                                        <td className="">Type 1</td>
                                        <td className="">1st Jan 2000</td>
                                        <td className="">All Admin </td>
                                        <td className="">Class 1 (A)</td>
                                        <td className=""><button>Select</button></td>
                                    </tr>
                                    <tr className="border-b-2 border-b-gray-200">
                                        <td className="p-2">1</td>
                                        <td className="">Lorem ipsum dolor sit amet.</td>
                                        <td className="">Type 1</td>
                                        <td className="">1st Jan 2000</td>
                                        <td className="">All Admin </td>
                                        <td className="">Class 1 (A)</td>
                                        <td className=""><button>Select</button></td>
                                    </tr>
                                    <tr className="border-b-2 border-b-gray-200">
                                        <td className="p-2">1</td>
                                        <td className="">Lorem ipsum dolor sit amet.</td>
                                        <td className="">Type 1</td>
                                        <td className="">1st Jan 2000</td>
                                        <td className="">All Admin </td>
                                        <td className="">Class 1 (A)</td>
                                        <td className=""><button>Select</button></td>
                                    </tr>
                                    <tr className="border-b-2 border-b-gray-200">
                                        <td className="p-2">1</td>
                                        <td className="">Lorem ipsum dolor sit amet.</td>
                                        <td className="">Type 1</td>
                                        <td className="">1st Jan 2000</td>
                                        <td className="">All Admin </td>
                                        <td className="">Class 1 (A)</td>
                                        <td className=""><button>Select</button></td>
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

            export default ContentResources;
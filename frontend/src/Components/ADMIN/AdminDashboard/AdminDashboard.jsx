import React from 'react'

export default function AdminDashboard() {
    return (
        <>

            <section className="">
                <div className=" p-4">
                    <div className="shadow-xl p-6 rounded-2xl">
                        <div className="">
                            <h1 className="font-bold text-3xl">Welcome</h1>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-10 mt-4 ">
                            <div className="flex justify-between items-start bg-gradient-to-r from-[#0acec7] to-[#2baeaaa1] p-4 rounded-xl text-white font-bold ">
                                <div className="flex flex-col gap-2 ">
                                    <h1 className="text-xl">Student</h1>
                                    <h3 className="font-medium">Total Studnet</h3>
                                </div>
                                <div className="text-xl">100</div>
                            </div>

                            <div className="flex justify-between items-start bg-gradient-to-r from-[#0ace2e] to-[#2bae3fa1] p-4 rounded-xl text-white font-bold ">
                                <div className="flex flex-col gap-2 ">
                                    <h1 className="text-xl">Teacher</h1>
                                    <h3 className="font-medium">Total Teacehr</h3>
                                </div>
                                <div className="text-xl">20</div>
                            </div>



                            <div className="flex justify-between items-start bg-gradient-to-r from-[#ad0ace] to-[#5e259ba1] p-4 rounded-xl text-white font-bold ">
                                <div className="flex flex-col gap-2 ">
                                    <h1 className="text-xl">Staffs</h1>
                                    <h3 className="font-medium">Total Studnet</h3>
                                </div>
                                <div className="text-xl">10</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" ">
                    <div className="grid grid-cols-5 items-center gap-4 mt-4">
                        <div className="col-span-3 bg-gray-200 h-96 shadow-xl">
                            

                        </div>
                        <div className="col-span-2 bg-gray-200 h-96 shadow-xl">
                        
                        </div>
                    </div>
                </div>

                <div className="my-10">
                    <h1 className='text-2xl font-bold'>Notice Board</h1>

                    <div className="shadow-lg grid  items-center">
                        <table className='w-full text-gray-600'>
                            <thead className='border-b-2 border-b-gray-200'>
                               
                                    <td className="p-4">Title</td>
                                    <td className="">Message</td>
                                    <td className="">Action</td>
                                
                            </thead>
                            <tbody>
                                <tr className='border-b-2 border-b-gray-200 px-4 '>
                                    <td className="p-4">Notice 01</td>
                                    <td className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam, soluta error ipsam, unde magnam vero eos!</td>
                                    <td className=""><button className='border-2 border-blue-400 px-6 py-1 rounded-2xl cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200'>View</button></td>
                                </tr>

                                <tr className='border-b-2 border-b-gray-200 px-4 '>
                                    <td className="p-4">Notice 02</td>
                                    <td className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam, soluta error ipsam, unde magnam vero eos!</td>
                                    <td className=""><button className='border-2 border-blue-400 px-6 py-1 rounded-2xl cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200'>View</button></td>
                                </tr>

                                <tr className='border-b-2 border-b-gray-200 px-4 '>
                                    <td className="p-4">Notice 03</td>
                                    <td className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam, soluta error ipsam, unde magnam vero eos!</td>
                                    <td className=""><button className='border-2 border-blue-400 px-6 py-1 rounded-2xl cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200'>View</button></td>
                                </tr>

                                <tr className='border-b-2 border-b-gray-200 px-4 '>
                                    <td className="p-4">Notice 04</td>
                                    <td className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam, soluta error ipsam, unde magnam vero eos!</td>
                                    <td className=""><button className='border-2 border-blue-400 px-6 py-1 rounded-2xl cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200'>View</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



            </section>

        </>
    )
}

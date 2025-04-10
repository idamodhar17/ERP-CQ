import React from 'react'
import { Search, Trash2 } from 'lucide-react'

export default function AssignSubject() {
    return (
        <>

            <section className="">
                <div className="">
                    <h1 className="text-2xl ">Assign Subject </h1>

                    <div className="mt-5 shadow-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center">
                                <h1 className="">Select Criteria</h1>
                                <button className='bg-blue-600 text-white py-1 px-6 rounded-xl'>+ Assign Subject</button>
                            </div>
                            <div className="grid grid-cols-2 items-center mt-4 gap-6">
                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg'>
                                    <option value="" className="">Class 1</option>
                                    <option value="" className="">Class 2</option>
                                    <option value="" className="">Class 3</option>
                                    <option value="" className="">Class 4</option>
                                </select>

                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg'>
                                    <option value="" className="">A</option>
                                    <option value="" className="">B</option>
                                    <option value="" className="">C</option>
                                    <option value="" className="">D</option>
                                </select>
                            </div>

                            <div className="flex justify-end items-center mt-4 ">
                                <button className="rounded-lg px-4 py-1 flex justify-around items-center border-2 border-blue-400 hover:bg-blue-500 hover:text-white"><Search /> Search</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 shadow-lg p-6">
                        <h1 className="text-xl">Assign Subject Create</h1>
                        <form action="" className="">
                            <div className="grid grid-cols-5 items-center mt-4 gap-6 p-6 ">


                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg col-span-2'>
                                    <option value="" className="">Hindi</option>
                                    <option value="" className="">English</option>
                                    <option value="" className="">Maths</option>
                                    <option value="" className="">Dance</option>
                                </select>

                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg col-span-2'>
                                    <option value="" className="">A</option>
                                    <option value="" className="">B</option>
                                    <option value="" className="">C</option>
                                    <option value="" className="">D</option>
                                </select>

                                <div className="">
                                    <Trash2 className=' text-blue-600 ' />
                                </div>

                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg col-span-2'>
                                    <option value="" className="">Hindi</option>
                                    <option value="" className="">English</option>
                                    <option value="" className="">Maths</option>
                                    <option value="" className="">Dance</option>
                                </select>

                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg col-span-2'>
                                    <option value="" className="">A</option>
                                    <option value="" className="">B</option>
                                    <option value="" className="">C</option>
                                    <option value="" className="">D</option>
                                </select>

                                <div className="">
                                    <Trash2 className=' text-blue-600 ' />
                                </div>

                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg col-span-2'>
                                    <option value="" className="">Hindi</option>
                                    <option value="" className="">English</option>
                                    <option value="" className="">Maths</option>
                                    <option value="" className="">Dance</option>
                                </select>

                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg col-span-2'>
                                    <option value="" className="">A</option>
                                    <option value="" className="">B</option>
                                    <option value="" className="">C</option>
                                    <option value="" className="">D</option>
                                </select>

                                <div className="">
                                    <Trash2 className=' text-blue-600 ' />
                                </div>

                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg col-span-2'>
                                    <option value="" className="">Hindi</option>
                                    <option value="" className="">English</option>
                                    <option value="" className="">Maths</option>
                                    <option value="" className="">Dance</option>
                                </select>

                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg col-span-2'>
                                    <option value="" className="">A</option>
                                    <option value="" className="">B</option>
                                    <option value="" className="">C</option>
                                    <option value="" className="">D</option>
                                </select>

                                <div className="">
                                    <Trash2 className=' text-blue-600 ' />
                                </div>

                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg col-span-2'>
                                    <option value="" className="">Hindi</option>
                                    <option value="" className="">English</option>
                                    <option value="" className="">Maths</option>
                                    <option value="" className="">Dance</option>
                                </select>

                                <select name="" id="" className='px-4 py-2 border-2 border-gray-400 rounded-lg col-span-2'>
                                    <option value="" className="">A</option>
                                    <option value="" className="">B</option>
                                    <option value="" className="">C</option>
                                    <option value="" className="">D</option>
                                </select>

                                <div className="">
                                    <Trash2 className=' text-blue-600 ' />
                                </div>


                            </div>

                            <div className="flex justify-center items-center py-4">
                                <button className="bg-sky-400 px-6 py-2 rounded-lg text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

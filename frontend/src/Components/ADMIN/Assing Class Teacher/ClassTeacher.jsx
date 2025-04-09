import React from 'react'
import { Search, Sheet, Copy, FileText, Check } from 'lucide-react'


export default function ClassTeacher() {
    return (
        <>

            <section className="">

                <h1 className='text-2xl '>Assign Class Teacher</h1>

                <div className="grid grid-cols-4 text-gray-800 mt-7 gap-6">

                    <div className="shadow-lg p-6 flex flex-col gap-6">
                        <h1 className='text-lg'>Assign Class Teacher</h1>
                        
                        <form action="">
                        <div className="flex flex-col">
                            <label className='text-gray-500'>Class</label>
                            <select name="" id="" className='px-2 py-2  border-2 border-gray-300 rounded-sm'>
                                <option value="" className='' >Class 1</option>
                                <option value="" className='' >Class 2</option>
                                <option value="" className='' >Class 3</option>
                                <option value="" className='' >Class 4</option>
                                <option value="" className='' >Class 5</option>
                            </select>
                        </div>



                        <div className="flex flex-col pb-6">
                            <label className='text-gray-500'>Class</label>
                            <select name="" id="" className='px-2 py-2  border-2 border-gray-300 rounded-sm'>
                                <option value="" className='' >A</option>
                                <option value="" className='' >B</option>
                                <option value="" className='' >C</option>
                                <option value="" className='' >D</option>
                                <option value="" className='' >E</option>
                            </select>
                        </div>

                        <div className="flex flex-col  gap-2 ">
                            <h1 className="">Teachers</h1>
                            <div className="flex gap-2 ">
                                <input type="radio" name="Theory" id="Theory" />
                                <label htmlFor="Theory">Abc</label>
                            </div>
                            <div className="flex gap-2 ">
                                <input type="radio" name="Practical" id="Practical" />
                                <label htmlFor="Practical">Xyz</label>
                            </div>
                            <div className="flex gap-2 ">
                                <input type="radio" name="Practical" id="Practical" />
                                <label htmlFor="Practical">Xyz</label>
                            </div>
                            <div className="flex gap-2 ">
                                <input type="radio" name="Practical" id="Practical" />
                                <label htmlFor="Practical">Xyz</label>
                            </div>
                            <div className="flex gap-2 ">
                                <input type="radio" name="Practical" id="Practical" />
                                <label htmlFor="Practical">Xyz</label>
                            </div>
                        </div>

                        <div className="flex justify-center items-center pt-10">
                            <button className='bg-gradient-to-r from-blue-600 to-blue-500 text-white flex justify-center items-center gap-2 px-6 py-2 rounded-lg'><Check/> Save Class Teacher</button>
                        </div>
                        </form>
                    </div>

                    <div className="col-span-3">
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
                                        <td className="p-2">Sr</td>
                                        <td className="">Teacher</td>
                                        <td className="">Section</td>
                                        <td className="">Action</td>

                                    </thead>
                                    <tbody className=''>
                                        <tr className="border-b-2 border-b-gray-200">
                                            <td className="p-2">01</td>
                                            <td className="">XYZ</td>
                                            <td className="">A</td>
                                            <td className=""><button className="px-6 border-2 border-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white">select</button></td>
                                            <ul className="bg-white shadow-2xl">
                                                <li className="">Edit</li>
                                                <li className="">Delete</li>
                                            </ul>

                                        </tr>

                                        <tr className="border-b-2 border-b-gray-200">
                                            <td className="p-2">01</td>
                                            <td className="">XYZ</td>
                                            <td className="">A</td>
                                            <td className=""><button className="px-6 border-2 border-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white">select</button></td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

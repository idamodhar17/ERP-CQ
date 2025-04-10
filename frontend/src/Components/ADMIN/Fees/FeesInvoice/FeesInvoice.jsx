import React, { useState } from 'react'
import { Search, Sheet, Copy, FileText, X } from 'lucide-react'


export default function FeesInvoice() {

      const [showModal, setShowModal] = useState(false)
        const [selectedStaff, setSelectedStaff] = useState(null)
    
        const handleEdit = (staff) => {
            setSelectedStaff(staff)
            setShowModal(true)
        }
    
        const closeModal = () => {
            setShowModal(false)
            setSelectedStaff(null)
        }
    
        const staffData = [
            {
                id: 1,
                name: 'Ravi Kumar',
                empId: 'EMP001',
                salary: 25000,
                deduction: 1000,
                paid: true,
                date: '01-Apr-2025'
            },
            {
                id: 2,
                name: 'Meera Joshi',
                empId: 'EMP002',
                salary: 28000,
                deduction: 2000,
                paid: false,
                date: '01-Apr-2025'
            }
        ]
        

    return (
        <>

            <section>
                <div className="">
                    <h1 className="text-2xl">Fees Invoice</h1>

                    {/* <div className="mt-4">
                    <button className='px-10 py-1 text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500'>+ ADD</button>
                </div> */}

                    <div className="">
                        <div className=" mt-10 shadow-lg p-4">
                            <div className="grid grid-cols-3 items-center">
                                <div className="">
                                    <h1 className=""></h1>
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

                            <div className="w-full mt-6 text-gray-800">
                            <table className="w-full">
                                <thead className="bg-gray-100 py-2">
                                    <tr>
                                        <td className="p-2">Sr</td>
                                        <td>Staff Name</td>
                                        <td>Employee ID</td>
                                        <td>Salary</td>
                                        <td>Deduction</td>
                                        <td>Net Salary</td>
                                        <td>Status</td>
                                        <td>Date</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {staffData.map((staff, index) => (
                                        <tr key={staff.id} className="border-b-2 border-b-gray-200">
                                            <td className="p-2">{index + 1}</td>
                                            <td>{staff.name}</td>
                                            <td>{staff.empId}</td>
                                            <td>{staff.salary}</td>
                                            <td>{staff.deduction}</td>
                                            <td>{staff.salary - staff.deduction}</td>
                                            <td>
                                                <button className={`px-4 py-1 rounded-lg text-white ${staff.paid ? 'bg-green-400' : 'bg-red-500'}`}>
                                                    {staff.paid ? 'PAID' : 'UNPAID'}
                                                </button>
                                            </td>
                                            <td>{staff.date}</td>
                                            <td>
                                                <div className="relative group inline-block">
                                                    <button className="select px-6 border-2 border-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white">
                                                        select
                                                    </button>
                                                    <ul className="action bg-gray-100 p-4 flex-col gap-2 shadow-2xl absolute w-full pt-2 hidden group-hover:flex z-10">
                                                        <li className="hover:bg-gray-200 p-2">
                                                            <button onClick={() => handleEdit(staff)}>Edit</button>
                                                        </li>
                                                        <li className="hover:bg-gray-200 p-2">
                                                            <button>Delete</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>

                {showModal && selectedStaff && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl p-6 w-[400px] relative">
                        <button onClick={closeModal} className="absolute right-4 top-4 text-gray-500 hover:text-black">
                            <X />
                        </button>
                        <h2 className="text-xl font-bold mb-4">Payment for {selectedStaff.name}</h2>
                        <form className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm">Employee ID</label>
                                <input
                                    value={selectedStaff.empId}
                                    disabled
                                    className="w-full p-2 border rounded-md bg-gray-100"
                                />
                            </div>
                            <div>
                                <label className="text-sm">Salary</label>
                                <input
                                    value={selectedStaff.salary}
                                    disabled
                                    className="w-full p-2 border rounded-md bg-gray-100"
                                />
                            </div>
                            <div>
                                <label className="text-sm">Deduction</label>
                                <input
                                    type="number"
                                    defaultValue={selectedStaff.deduction}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label className="text-sm">Payment Date</label>
                                <input type="date" className="w-full p-2 border rounded-md" />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Submit Payment
                            </button>
                        </form>
                    </div>
                </div>
            )}
            </section>


        </>
    )
}

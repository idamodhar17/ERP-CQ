import React from 'react'
import { Search, Sheet, Copy, FileText   } from 'lucide-react'


export default function StaffReport() {
  return (
  <>

<section className="">
            <div className="">

                <h1 className="text-2xl">Staff Report</h1>

            </div>
            <div className="shadow-lg p-6 mt-2 flex flex-col gap-6">
                <h1 className="text-lg ">Select Criteria</h1>

                <div className="grid grid-cols-2 items-center gap-5  ">

                    <div className="flex flex-col gap-2 text-gray-500 ">
                        <label className='text-gray-500'>Roll</label>
                        <select name="" id="" className='px-6 py-2  border-2 border-gray-300 rounded-sm'>
                          <option value="" className='' >Class 1</option>
                          <option value="" className='' >Class 2</option>
                          <option value="" className='' >Class 3</option>
                          <option value="" className='' >Class 4</option>
                          <option value="" className='' >Class 5</option>
                        </select>
                    </div>

                   

                    <div className="flex flex-col gap-2 text-gray-500 ">
                        <label className='text-gray-500'>Name</label>
                        <input type="text" className='px-6 py-2  border-2 border-gray-300 rounded-sm' />
                    </div>

                    

                </div>

                <div className="flex justify-end items-center">
                  <button className='flex justify-center items-center gap-4 text-white px-10 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-blue-700'><Search/> Search</button>
                </div>
            </div>

            <div className=" mt-10 shadow-lg p-4">
              <div className="grid grid-cols-3 items-center">
                <div className="">
                  <h1 className="">Staff Report</h1>
                </div>

                <div className="flex items-center gap-2 ">
                    <Search/>
                    <input type="text" className='border-b-2 border-b-blue-200 outline-0 px-4 py-1 ' placeholder='Search...' />
                </div>

                <div className="flex items-center justify-self-center gap-6 border-2 border-blue-300 px-10 py-2 rounded-2xl">
                <button type="button" className='text-blue-500 hover:text-blue-700 '><Copy/></button>
                      <button type="button" className='text-blue-500  hover:text-blue-700 border-x-2 border-x-blue-400 px-3'><Sheet/></button>
                      <button type="button" className='text-blue-500 hover:text-blue-700 '><FileText/></button>
                </div>
              </div>

              <div className="w-full mt-6">
                <table className='w-full'>
                  <thead className='bg-gray-100 py-2'>
                      <td className="p-2">SR</td>
                      <td className="">Name</td>
                      <td className="">ID</td>
                      <td className="">Roll</td>
                      <td className="">Gender</td>
                      <td className="">Phone</td>
                  </thead>
                  <tbody className=''>
                      <tr className="border-b-2 border-b-gray-200">
                        <td className="p-2">01</td>
                        <td className="">ABC</td>
                        <td className="">000001</td>
                        <td className="">Hello</td>
                        <td className="">Male</td>
                        <td className="">1234567890</td>
                      </tr>

                      <tr className="border-b-2 border-b-gray-200">
                      <td className="p-2">01</td>
                        <td className="">ABC</td>
                        <td className="">000001</td>
                        <td className="">Hello</td>
                        <td className="">Male</td>
                        <td className="">1234567890</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </section>
    
  </>
  )
}

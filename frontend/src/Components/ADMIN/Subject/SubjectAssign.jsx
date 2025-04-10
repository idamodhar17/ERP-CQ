import React from 'react'
import { Search, Sheet, Copy, FileText } from 'lucide-react'


export default function SubjectAssign() {
  return (
    <>

      <section className="">
        <h1 className='text-2xl '>Subject</h1>

        <div className="grid md:grid-cols-4 text-gray-800 mt-7 gap-6">

          <div className="shadow-lg md:p-6 p-4 flex flex-col gap-6">
            <h1 className='text-lg'>Add Subject</h1>
            <div className="flex flex-col">
              <label htmlFor="" className='text-sm'>SUBJECT NAME</label>
              <input type="text" className="border-2 border-gray-300 px-4 py-2 rounded-lg" />
            </div>

            <div className="flex justify-start gap-8 items-center">
              <div className="flex justify-center gap-2 ">
                <input type="radio" name="Theory" id="Theory" />
                <label htmlFor="Theory">Theory</label>
              </div>
              <div className="flex justify-center gap-2 ">
                <input type="radio" name="Practical" id="Practical" />
                <label htmlFor="Practical">Practical</label>
              </div>
            </div>

            <div className="flex flex-col pb-6">
              <label htmlFor="" className='text-sm'>SUBJECT Code</label>
              <input type="text" className="border-2 border-gray-300 px-4 py-2 rounded-lg" />
            </div>

            <div className="flex justify-center">
              <button className="bg-blue-500 text-white px-6 py-1 rounded-lg">ADD</button>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className=" mt-10 shadow-lg p-4">
              <div className="grid gap-3 md:grid-cols-3 items-center">
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

              <div className="w-full mt-6 overflow-x-auto">
                <table className='w-full max-md:border-separate border-spacing-x-4 border-spacing-y-0'>
                  <thead className='bg-gray-100 py-2'>
                    <td className="p-2">Sr</td>
                    <td className="">Subject</td>
                    <td className="">Subject Type</td>
                    <td className="">Subject Code</td>
                    <td className="">Action</td>

                  </thead>
                  <tbody className=''>
                    <tr className="border-b-2 border-b-gray-200">
                      <td className="p-2">01</td>
                      <td className="">DBMS</td>
                      <td className="">Theory</td>
                      <td className="">000001</td>
                      <td>
                        <div className="relative group inline-block">
                          <button className="select px-6 border-2 border-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white">
                            select
                          </button>
                          <ul className="action bg-gray-100 p-4 flex-col gap-2 shadow-2xl absolute w-full pt-2 hidden group-hover:flex z-10">
                            <li className="hover:bg-gray-200 p-2">
                              <button>Edit</button>
                            </li>
                            <li className="hover:bg-gray-200 p-2">
                              <button>Delete</button>
                            </li>
                          </ul>
                        </div>
                      </td>


                    </tr>

                    <tr className="border-b-2 border-b-gray-200">
                      <td className="p-2">01</td>
                      <td className="">DBMS</td>
                      <td className="">Theory</td>
                      <td className="">000001</td>
                      <td>
                        <div className="relative group inline-block">
                          <button className="select px-6 border-2 border-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white">
                            select
                          </button>
                          <ul className="action bg-gray-100 p-4 flex-col gap-2 shadow-2xl absolute w-full pt-2 hidden group-hover:flex z-10">
                            <li className="hover:bg-gray-200 p-2">
                              <button>Edit</button>
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
      </section>

    </>
  )
}

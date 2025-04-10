import React from 'react'

export default function GenrateId() {
  return (
    <>

        <section className=''>
            <h1 className="text-2xl">Genrate ID</h1>

            <div className="mt-10 shadow-lg p-6  text-gray-800">
                <div className="grid md:grid-cols-3 gap-10 items-center">
                    <div className="flex flex-col">
                        <label htmlFor="">Name</label>
                        <input type="text" className='px-6 py-2 border-2 border-gray-300 rounded-lg' />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="">Admission No.</label>
                        <input type="text" className='px-6 py-2 border-2 border-gray-300 rounded-lg' />
                    </div>

                    <div className="flex justify-center items-center">
                        <button className='bg-gradient-to-r from-blue-600 to-blue-500 py-2 rounded-lg px-10 text-white '>Genrate</button>
                    </div>


                </div>
            </div>

            <div className="flex justify-center items-center mt-10">

                
            </div>
        </section>
    
    </>
  )
}

import React from 'react'

export default function OurProfile() {

    const student = {
        admissionNo: 'SGU2025CS001',
        fullName: 'Srujal Kiran Yandagoudar',
        class: 'B.Tech CSE - 3rd Year',
        dob: '2003-10-15',
        contact: '9876543210',
        email: 'srujal@example.com',
        address: 'Kolhapur, Maharashtra',
        guardian: 'Mr. Yandagoudar',
        image: '/Images/Student.png', // You can replace with actual student image
      };

      const students = [
        {
          admissionNo: "0001",
          name: "John Doe",
          attendance: {
            "1": "P",
            "2": "A",
            "3": "P",
            "4": "P",
            "5": "L",
            // ... fill for each day of the month
          },
        },
    
      ];
    
      const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // For April (30 days)
    

  return (
   <>
    
    <section className="">
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-2xl p-6 grid grid-cols-1 items-center gap-6">
        {/* Profile Photo */}
        <div className="flex-shrink-0 mb-4 md:mb-0 justify-self-center">
          <img
            src={student.image}
            alt="Student"
            className="rounded-xl w-40 h-40 object-cover"
          />
        </div>

        {/* Student Info */}
        <div className="flex flex-col gap-3 justify-self-center ">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">{student.fullName}</h2>
          <p className="text-gray-600 mb-1"><span className="font-semibold">Admission No:</span> {student.admissionNo}</p>
          <p className="text-gray-600 mb-1"><span className="font-semibold">Class:</span> {student.class}</p>
          <p className="text-gray-600 mb-1"><span className="font-semibold">Date of Birth:</span> {student.dob}</p>
          <p className="text-gray-600 mb-1"><span className="font-semibold">Contact:</span> {student.contact}</p>
          <p className="text-gray-600 mb-1"><span className="font-semibold">Email:</span> {student.email}</p>
          <p className="text-gray-600 mb-1"><span className="font-semibold">Guardian:</span> {student.guardian}</p>
          <p className="text-gray-600"><span className="font-semibold">Address:</span> {student.address}</p>
        </div>
      </div>
        </div>


 
 

    <section className="min-h-screen bg-white px-4 py-10">
      <div className="overflow-auto rounded-lg shadow-lg border border-blue-200">
        <table className="min-w-max text-sm text-center border-collapse">
          <thead className="bg-blue-100 text-blue-700 sticky top-0">
            <tr>
              <th className="px-4 py-2 border">Admission No</th>
              <th className="px-4 py-2 border">Student Name</th>
              {daysInMonth.map((day) => (
                <th key={day} className="px-2 py-2 border">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={idx} className="hover:bg-blue-50">
                <td className="border px-4 py-2 font-medium">{student.admissionNo}</td>
                <td className="border px-4 py-2 text-left">{student.name}</td>
                {daysInMonth.map((day) => {
                  const status = student.attendance[day.toString()] || "-";
                  const bgColor =
                    status === "P"
                      ? "bg-green-100 text-green-700"
                      : status === "A"
                      ? "bg-red-100 text-red-700"
                      : status === "L"
                      ? "bg-yellow-100 text-yellow-700"
                      : "";

                  return (
                    <td key={day} className={`border px-2 py-1 ${bgColor}`}>
                      {status}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>


    </section>

   </>
  )
}

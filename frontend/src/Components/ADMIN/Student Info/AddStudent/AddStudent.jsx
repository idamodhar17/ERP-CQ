import React, { useState } from "react";

export default function AddStudent() {
  const [activeTab, setActiveTab] = useState("personal");

  const tabClass = (tab) =>
    `px-4 py-2 border-b-2 font-semibold ${
      activeTab === tab
        ? "border-purple-600 text-purple-600"
        : "border-transparent text-gray-600 hover:text-purple-500"
    }`;

  return (
    <div className="p-6 bg-white rounded shadow-lg  mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap border-b mb-6 gap-4">
        {[
          { id: "personal", label: "PERSONAL INFO" },
          { id: "document", label: "DOCUMENT INFO" },
          { id: "previous", label: "PREVIOUS SCHOOL INFO" },
          { id: "other", label: "OTHER INFO" },
        ].map((tab) => (
          <button
            key={tab.id}
            className={tabClass(tab.id)}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panel: Personal Info */}
      {activeTab === "personal" && (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1">Academic Year *</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="2025 [Jan-Dec]" />
          </div>
          <div>
            <label className="block mb-1">Class *</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Section *</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Admission Number *</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Admission Date</label>
            <input type="date" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Roll Number</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Group</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">First Name *</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Last Name *</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Gender *</label>
            <select className="w-full border p-2 rounded">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Date of Birth</label>
            <input type="date" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Religion</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Caste</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div className="col-span-2">
            <label className="block mb-1">Student Photo</label>
            <input type="file" className="border p-2 rounded w-full" />
          </div>
        </div>
      )}

      {/* Panel: Document Info */}
      {activeTab === "document" && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-1">National ID Card</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Birth Certificate Number</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Bank Name</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Bank Account Number</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">IFSC Code</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Additional Notes</label>
              <textarea className="w-full border p-2 rounded" rows="4"></textarea>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Document Attachment</h3>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((doc) => (
                <div key={doc}>
                  <label className="block mb-1">Document 0{doc} Title</label>
                  <input type="text" className="w-full border p-2 rounded mb-2" />
                  <input type="file" className="w-full border p-2 rounded bg-purple-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Panel: Previous School Info */}
      {activeTab === "previous" && (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1">Previous School Name</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Previous Class</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div className="col-span-2">
            <label className="block mb-1">Previous School Address</label>
            <textarea className="w-full border p-2 rounded" rows="3" />
          </div>
        </div>
      )}

      {/* Panel: Other Info */}
      {activeTab === "other" && (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1">Hobbies</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Blood Group</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
        </div>
      )}

      <div className="mt-6 text-right">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Save Student
        </button>
      </div>
    </div>
  );
}

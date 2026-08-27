import React, { useState } from 'react';
import { Download, Search } from 'lucide-react';

const subjects = ['Mathematics', 'Physics', 'Computer Science', 'English'];
const types = ['Theory', 'Lab'];

const sampleResources = [
  { title: 'Lecture 1 Notes', type: 'Theory', subject: 'Mathematics', uploadedBy: 'Prof. Sharma', date: '2025-04-01', file: '/files/math_lecture1.pdf' },
  { title: 'Lab Manual 1', type: 'Lab', subject: 'Computer Science', uploadedBy: 'Prof. Mehta', date: '2025-03-20', file: '/files/cs_lab1.pdf' },
  { title: 'Assignment 2', type: 'Theory', subject: 'English', uploadedBy: 'Prof. Ahuja', date: '2025-03-25', file: '/files/eng_assignment2.pdf' },
  { title: 'Lab Practice - Sorting', type: 'Lab', subject: 'Computer Science', uploadedBy: 'Prof. Mehta', date: '2025-03-29', file: '/files/cs_sorting_lab.pdf' },
];

export default function ResourceView() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [resources, setResources] = useState([]);

  const handleSearch = () => {
    const filtered = sampleResources.filter(
      res => res.subject === selectedSubject && res.type === selectedType
    );
    setResources(filtered);
  };

  return (
    <section className="p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold text-blue-600 mb-4">Resource View</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select
          className="border border-gray-300 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedSubject}
          onChange={e => setSelectedSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          {subjects.map((subj, index) => (
            <option key={index} value={subj}>{subj}</option>
          ))}
        </select>

        <select
          className="border border-gray-300 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
        >
          <option value="">Select Type</option>
          {types.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Search className="mr-2 w-4 h-4" />
          Search
        </button>
      </div>

      {resources.length > 0 ? (
        <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Uploaded By</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-center">Download</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((res, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="p-3">{res.title}</td>
                <td className="p-3">{res.uploadedBy}</td>
                <td className="p-3">{res.date}</td>
                <td className="p-3 text-center">
                  <a
                    href={res.file}
                    download
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-gray-500 mt-6">No resources found. Please select and click Search.</div>
      )}
    </section>
  );
}

import React, { useState } from 'react';
import '../Notice/Notice.css';
import { Calendar, Contact, X } from 'lucide-react';

const initialNotices = [
    {
        id: 1,
        title: "Exam Schedule Released",
        content: "Semester end exams will be conducted from 25th April. Please check the timetable.",
        pubDate: "12th Apr, 2025",
        noticeDate: "10th Apr, 2025",
        createdBy: "Super Admin"
    },
    {
        id: 2,
        title: "Holiday Notice",
        content: "The campus will remain closed on 14th April due to Ambedkar Jayanti.",
        pubDate: "11th Apr, 2025",
        noticeDate: "10th Apr, 2025",
        createdBy: "Principal Office"
    }
];

function Notice() {
    const [notices, setNotices] = useState(initialNotices);
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleEdit = (notice) => {
        setSelectedNotice(notice);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedNotice(null);
        setShowModal(false);
    };

    const handleSave = (e) => {
        e.preventDefault();
        const updatedNotices = notices.map(n =>
            n.id === selectedNotice.id ? selectedNotice : n
        );
        setNotices(updatedNotices);
        closeModal();
    };

    return (
        <div className="NoticePage">
            <h1>Notice Board</h1>
            <div className="NoticePage-MainContent">
                <div className="NoticePage-Head">
                    <h1>All Notices</h1>
                    <button>+ ADD NOTICE</button>
                </div>

                {notices.map((notice) => (
                    <div key={notice.id} className="NoticePage-Element1">
                        <div className="Element1-head">
                            <div className="Element-title1">{notice.title}</div>
                            <div className="Element1-btns">
                                <button onClick={() => handleEdit(notice)}>EDIT</button>
                                <button>DELETE</button>
                            </div>
                        </div>
                        <div className="Element1-Content">
                            <div className="Element1-text">
                                <p>{notice.content}</p>
                            </div>
                            <div className="Element1-info">
                                <div className="info-elements"><Calendar className="w-5 h-5 text-gray-600" /><p>Publication Date: {notice.pubDate}</p></div>
                                <div className="info-elements"><Calendar className="w-5 h-5 text-gray-600" /><p>Notice Date: {notice.noticeDate}</p></div>
                                <div className="info-elements"><Contact className="w-5 h-5 text-gray-600" /><p>Created By: {notice.createdBy}</p></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Notice Modal */}
            {showModal && selectedNotice && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 w-[500px] relative">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600 hover:text-black"><X /></button>
                        <h2 className="text-xl font-bold mb-4">Edit Notice</h2>
                        <form onSubmit={handleSave} className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm">Title</label>
                                <input
                                    type="text"
                                    value={selectedNotice.title}
                                    onChange={(e) => setSelectedNotice({ ...selectedNotice, title: e.target.value })}
                                    className="w-full border p-2 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="text-sm">Content</label>
                                <textarea
                                    value={selectedNotice.content}
                                    onChange={(e) => setSelectedNotice({ ...selectedNotice, content: e.target.value })}
                                    rows="4"
                                    className="w-full border p-2 rounded-md"
                                ></textarea>
                            </div>
                            <div>
                                <label className="text-sm">Publication Date</label>
                                <input
                                    type="date"
                                    onChange={(e) => setSelectedNotice({ ...selectedNotice, pubDate: e.target.value })}
                                    className="w-full border p-2 rounded-md"
                                />
                            </div>
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Save</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Notice;

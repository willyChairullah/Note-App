import { useEffect, useState } from "react";
import NoteListCard from "../common/NoteListCard";

const NoteListPanel = ({ selectedCategory, onNoteChange }) => {
  const [noteLists, setNoteLists] = useState([]);

  useEffect(() => {
    if (selectedCategory !== null) {
      const fetchData = async () => {
        try {
          const res = await fetch(`/api/categories/${selectedCategory}`);
          const dataNote = await res.json();
          // console.log(dataNote);
          setNoteLists(dataNote);
        } catch (error) {
          console.log("error fetching noteLists:", error);
        }
      };
      fetchData();
    }
  }, [selectedCategory]);

  return (
    <>
      {/* <!-- Added Search Bar --> */}
      <div className="relative mb-4">
        <input
          id="search-notes"
          type="text"
          placeholder="Cari catatan..."
          className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          //   stroke-width="2"
          //   stroke-linecap="round"
          //   stroke-linejoin="round"
          className="absolute left-3 top-2.5 text-gray-400"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 id="category-title" className="text-xl font-semibold">
          Semua Catatan
        </h2>
        {/* <!-- Removed the add button from here --> */}
      </div>

      <div id="notes-list" className="space-y-3">
        {noteLists && noteLists.notes && noteLists.notes.length > 0 ? (
          noteLists.notes.map((element, index) => (
            <NoteListCard key={index} noteList={element} selectNote={onNoteChange}/>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">
            Tidak ada catatan tersedia
          </p>
        )}
      </div>

      {/* <!-- Floating Action Button for adding notes --> */}
      <div className="fixed bottom-6 right-[calc(6/12*100%+1.5rem)] z-10">
        <button
          id="add-note-btn"
          className="w-14 h-14 rounded-full bg-[var(--accent-color)] text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            // stroke-width="2"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          >
            <path d="M12 5v14M5 12h14"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default NoteListPanel;

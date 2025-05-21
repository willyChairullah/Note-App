import { useEffect, useState } from "react";

const NoteListCard = ({ noteList, selectNote }) => {
  const [noteDetail, setNoteDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/notes/${noteList}`);
        const dataNote = await res.json();
        setNoteDetail(dataNote);
      } catch (error) {
        console.log("error fetching noteLists:", error);
      }
    };
    fetchData();
  }, [noteList]);

  // Fungsi untuk mengonversi timestamp menjadi teks relatif
  const getRelativeTime = timestamp => {
    if (!timestamp) return "";

    const now = new Date();
    const noteDate = new Date(timestamp);
    const diffTime = Math.abs(now - noteDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));

    if (diffDays > 30) {
      const months = Math.floor(diffDays / 30);
      return `${months} bulan yang lalu`;
    } else if (diffDays > 0) {
      return diffDays === 1 ? "Kemarin" : `${diffDays} hari yang lalu`;
    } else if (diffHours > 0) {
      return `${diffHours} jam yang lalu`;
    } else if (diffMinutes > 0) {
      return `${diffMinutes} menit yang lalu`;
    } else {
      return "Baru saja";
    }
  };

  // PERBAIKAN: Buat handler function untuk menangani klik
  const handleNoteClick = () => {
    selectNote(noteList);
  };

  return (
    <div className="note-item" data-category="all-notes">
      <div
        className="p-3 border rounded hover:bg-gray-200 cursor-pointer"
        onClick={handleNoteClick} // PERBAIKAN: Gunakan fungsi handler, bukan langsung memanggil selectNote
      >
        <h3 className="font-semibold">{noteDetail.title}</h3>
        <p className="text-sm text-gray-500 truncate">{noteDetail.snippet}</p>
        <span className="text-xs text-gray-400">
          {getRelativeTime(noteDetail.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default NoteListCard;

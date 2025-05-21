// Contoh integrasi ReactQuill dengan NoteDetailPanel Anda
import { useEffect, useState } from "react";
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css';

const NoteDetailPanel = ({ selectedNote }) => {
  const [noteDetail, setNoteDetail] = useState([]);
  const [editorValue, setEditorValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/notes/${selectedNote}`);
        const dataNote = await res.json();
        setNoteDetail(dataNote);
        setEditorValue(dataNote.content || '');
      } catch (error) {
        console.log("error fetching noteLists:", error);
      }
    };
    fetchData();
  }, [selectedNote]);

  const handleSave = async () => {
    try {
      // Simpan konten yang diedit ke backend
      await fetch(`/api/notes/${selectedNote}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...noteDetail, content: editorValue })
      });
      setIsEditing(false);
    } catch (error) {
      console.log("Error saving note:", error);
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <input
              id="note-title"
              className="text-2xl font-bold focus:outline-none w-full"
              value={noteDetail.title || ''}
              readOnly={!isEditing}
              onChange={(e) => setNoteDetail({...noteDetail, title: e.target.value})}
            />
          </div>
          <div className="flex space-x-2">
            <button on 
              className="text-gray-500 hover:bg-gray-100 p-2 rounded"
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            >
              {isEditing ? (
                <span>Save</span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              )}
            </button>
            {/* Delete button */}
          </div>
        </div>

        {/* Timestamp */}
        
        <div className="border-t pt-4">
          {isEditing ? (
            <ReactQuill 
              theme="snow" 
              value={editorValue} 
              onChange={setEditorValue}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  ['link', 'image'],
                  ['clean']
                ]
              }}
            />
          ) : (
            <div id="note-content" className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: editorValue }} />
            </div>
          )}
        </div>
      </div>

      {/* Tags section */}
    </>
  );
};

export default NoteDetailPanel;
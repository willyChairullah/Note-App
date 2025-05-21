import Sidebar from "../components/Sidebar/Sidebar";
import { NoteListPanel } from "../components/NoteListPanel";
import { NoteDetailPanel } from "../components/NoteDetailPanel";
import { useState } from "react";

const MainLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("cat-001");
  const [selectedNote, setSelectedNote] = useState("");

  const handleCategoryChange = (category) =>{
    setSelectedCategory(category)
  }
  const handleNoteChange = (note) =>{
    setSelectedNote(note)
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="w-2/12 bg-[var(--bg-primary)] p-4 border-r border-gray-200 transition-colors duration-200 flex flex-col">
          <Sidebar onCategoryChange={handleCategoryChange} />
        </div>
        <div className="w-4/12 bg-[var(--bg-secondary)] p-4 border-r border-gray-200 overflow-y-auto transition-colors duration-200">
          <NoteListPanel selectedCategory={selectedCategory} onNoteChange={handleNoteChange}/>
        </div>
        <div className="w-6/12 bg-[var(--bg-tertiary)] p-6 transition-colors duration-200">
          <NoteDetailPanel selectedNote={selectedNote}/>
        </div>
      </div>
    </>
  );
};

export default MainLayout;

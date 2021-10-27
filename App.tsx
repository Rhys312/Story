import React, { useState } from 'react';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea, { INote } from './CreateArea';

const App: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);

  function addNote(newNote: INote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id: number) {
    setNotes((prevNotes) => {
      return prevNotes.filter((Note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      <div>
        {notes.map((note: INote, index: number) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;

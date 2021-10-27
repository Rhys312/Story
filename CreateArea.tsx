import React, { useState } from 'react';

export interface INote {
  title: string;
  content: string;
  key: number | null;
  id: number | null;
}

interface Props {
  onAdd: (note: INote) => void;
}

function CreateArea(props: Props) {
  const [note, setNote] = useState<INote>({
    title: '',
    content: '',
    key: null,
    id: null,
  });

  function HandleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function SubmitHandler(event: React.FormEvent): void {
    props.onAdd(note);

    event.preventDefault();
  }

  return (
    <form action="">
      <input
        onChange={HandleChange}
        value={note.title}
        name="title"
        type="text"
        placeholder="Title"
      />
      <textarea
        onChange={HandleChange}
        value={note.content}
        name="content"
        id=""
        placeholder="Take a note..."
      ></textarea>
      <button type="submit" onClick={SubmitHandler}>
        Add
      </button>
    </form>
  );
}

export default CreateArea;



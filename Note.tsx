import React from 'react';

interface Props {
    key: number,
    id: number
    title: string,
    content: string
    onDelete: (id: number) => void
}

function Note(props: Props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => props.onDelete(props.id)}>DELETE</button>
        </div>

    )
}

export default Note;
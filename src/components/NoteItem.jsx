import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {
    const colors = ["linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)","linear-gradient(45deg, #3ec27b 0%, #dfd942 100%)",
    "linear-gradient(135deg, #5a9cc9 0%, #686dcc 100%)","linear-gradient(90deg, #e68071 0%, #d64663 55%, #e4667d 100%)","linear-gradient(315deg, #564E9E, #762fd8)"]

  return (
    <Link to={`edit-note/${note.id}`} className='note' style={{background:`${note.color}`}}>
        <h4>{note.title.length > 30 ? (note.title.substr(0,30)) + '...' : note.title}</h4>
        <p>{note.details.length > 50 ? (note.details.substr(0,50)) + '...' : note.details}</p>
        <p>{note.date}</p>
        </Link>
  )
}

export default NoteItem
import React, { useCallback, useEffect, useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { BsPlusSquareDotted } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import NoteItem from '../components/NoteItem';


const Notes = ({notes}) => {

    const [showSearch, setShowSearch] = useState(false)
    const [text, setText] = useState('')
    const [filteredNotes,setFilteredNotes] = useState(notes)

    const handleSearch = () => {
        setFilteredNotes(notes.filter((note) => note.title.toLowerCase().includes(text.toLowerCase()) || note.details.toLowerCase().includes(text.toLowerCase())))
    }

    useEffect(() =>{
        handleSearch()
    },[text])

    
   
    

  return (
    <section className='wrapper'>
        <header className='notes__header'>
            {!showSearch &&<h2>Мои Заметки</h2>}
            {
                showSearch && <input value={text} onChange={(e) => {setText(e.target.value); handleSearch()}} type="text" autoFocus placeholder='search'/>
            }

            {
            !showSearch 
            ? <button onClick={() => setShowSearch(!showSearch)}  className='btn'>
             <BiSearchAlt/>
            </button>
            : <button onClick={() => {
                setShowSearch(!showSearch)
                setText('')}}  className='btn'>
            <AiOutlineCloseCircle/>
           </button>
            }
        </header>

        <div className='notes__container'>
            {
                filteredNotes.length === 0 && <p className='empty__notes'>Заметок не найдено</p>
            }
            {
                filteredNotes.map((note) => <NoteItem key={note.id} note={note}/>)
            }
        </div>
        <Link to='/create-note'  className='btn add__btn'>
        <BsPlusSquareDotted/>
        </Link>
    </section>
  )
}

export default Notes
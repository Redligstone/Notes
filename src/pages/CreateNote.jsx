import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {TbArrowBackUp} from 'react-icons/tb'
import {v4 as uuid} from 'uuid'
import useCreateDate from '../components/useCreateDate'

const CreateNote = ({notes, setNotes}) => {
    const [title,setTitle] = useState('')
    const [details,setDetails] = useState('')
    const date = useCreateDate()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title && details) {

            const note = {
                id:uuid(),
                title,
                details,
                date
            }

            setNotes([note,...notes])
            navigate('/')
        }
        
    }
  return (
    <section className='wrapper__action'>
        <header className='create-note__header'>
            <Link to='/' className='btn'><TbArrowBackUp/></Link>
            <button className='btn lg primary' onClick={handleSubmit}>Save</button>
        </header>
        <form className="create-note__form" onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Title' autoFocus/>
                <textarea value={details} onChange={(e) => setDetails(e.target.value)} id="" c rows="28" placeholder='Note about...'></textarea>
            </form>
    </section>
  )
}

export default CreateNote
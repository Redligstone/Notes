import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {TbArrowBackUp} from 'react-icons/tb'
import {v4 as uuid} from 'uuid'
import useCreateDate from '../components/useCreateDate'

const CreateNote = ({notes, setNotes}) => {
    const [title,setTitle] = useState('')
    const [details,setDetails] = useState('')
    const [color,setColor] = useState("#FEBE10")
    const [showPopColors,setShowPopColors] = useState(false)
    const date = useCreateDate()
    const navigate = useNavigate()

    const colors = ["#1560bd","#018749","#F08080","#C60C30","#662d91","#FEBE10"]


    const handleSubmit = (e) => {
        e.preventDefault();

        if(title && details) {

            const note = {
                id:uuid(),
                title,
                details,
                date,
                color
            }

            setNotes([note,...notes])
            navigate('/')
        }
        
    }
  return (
    <section className='wrapper__action'>
        <header className='create-note__header'>
            <Link to='/' className='btn'><TbArrowBackUp/></Link>
            <button className='btn lg primary' onClick={handleSubmit}>Сохранить</button>
            <div>
                <button onClick={() => setShowPopColors(!showPopColors)} className='btn colors' style={{background:`${color}`}}></button>
                {showPopColors &&
                    <div className='colors__pop'>
                    {colors.map((color,i) => (
                        <button key={i} className='btn colors' onClick={() => {setColor(color);setShowPopColors(false) }} style={{background:`${color}`}}></button>
                    ))}
                </div>
                }   
            </div>
           
        </header>
        <form className="create-note__form" onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Название' autoFocus/>
                <textarea value={details} onChange={(e) => setDetails(e.target.value)} id="" c rows="28" placeholder='Текст'></textarea>
            </form>
    </section>
  )
}

export default CreateNote
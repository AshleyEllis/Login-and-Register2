import React, {useState} from 'react'
import style from 'styled-components'
import axios from 'axios'
const AddCurriculum = () =>{
    const [title,setTitle] = useState('')
    const [curr,setCurriculum] = useState('')
    const [professor,setProfessor] = useState('')


    const changeOnClick = e => {
        e.preventDefault()
        const curriculum = {
            title,
            curr,
            professor
        }
        axios.post("/api/curriculum/add", curriculum)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }

    return(
        <AddCurriculumContainer>
            <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} className="form-control" placeholder="Enter Title of the Course"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="professor">Professor</label>
                    <input type="text" onChange={e=>setProfessor(e.target.value)} className="form-control" placeholder="Enter the name of the professor"/>
                </div>
                <div className="form-group">
                    <label htmlFor="curr">Curriculum</label>
                    <textarea className="form-control" onChange={e=>setCurriculum(e.target.value)} rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Post Curriculum</button>
                </form>
        </AddCurriculumContainer>
    )
}

export default AddCurriculum

const AddCurriculumContainer = style.div`
margin: 3rem auto;
padding: 4rem;
width:31.25rem;
.btn-primary{
    margin-top: 2rem;
    border:none;
}
`
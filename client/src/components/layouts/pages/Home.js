import React, {useContext, useEffect} from "react";
import AllCurriculum from '../AllCurriculum'
import AuthContext from '../auth/AuthContext'
import style from 'styled-components'
import spinner from './spinner.gif'

//props
const Home = ({posts})  => {
  /** 
    const authContext = useContext(AuthContext)
  const {isAuthenticated, loadUser} = authContext
  useEffect(()=>{
    if(isAuthenticated){
      loadUser();
    }
    else{
      props.history.push('/login')
    }
  }, [isAuthenticated, props.history])**/
    return(
      <MainContainer>
        {!posts.length ? (<img src={spinner} alt="loading"/>):(

        posts.map((curriculum,key)=>(
          <div className="container">
            <h2>{curriculum.title}</h2>
            <p>{curriculum.curr}</p>
            <span className="badge badge-secondary p-2">{curriculum.professor}</span>
            <div className="row my-5">
              <div className="col-sm-2"><a href="" className= "btn btn-outline-success">Edit Article</a></div>
              <div className="col-sm-2"><a href="" className= "btn btn-outline-danger">Delete Article</a></div>
            </div>
          </div>
          
        )))}
        </MainContainer>
    )
}
  export default Home

//Main Container
const MainContainer = style.div`
margin: 7rem 0;

img{
  width: 8rem;
  display:block;
  margin: 0 auto;
}
`

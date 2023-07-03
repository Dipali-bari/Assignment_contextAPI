import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText]=useState("search movie");
  const [movie,setMovie]=useState([])
  const chengeText=(event)=>{
    setText(event.target.value)
  }
  const getMovie=(e)=>{
      e.preventDefault();
      axios.get(`http://www.omdbapi.com/?s=${text}&apikey=f60bcc34`)
      .then((response)=>{
        setMovie(response.data.Search)
      })
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">MOVIEAPP</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      
        
    </ul>
    <form className="form-inline my-2 my-lg-0" onSubmit={getMovie}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  onChange={chengeText}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      <div className='container my-3'>
        <div className='row'>
          {
            movie.map((value,index)=>{
              return (
                <div className='col-3'>
          <div className="card" style={{width:"18rem"}}>
  <img className="card-img-top" src={value.Poster} alt="Card image cap"/>
  <div className="card-body">
    <h3 className="card-title">{value.Year}</h3>
    <h4 className="card-text">{value.Title}</h4>
    
  </div>
</div>
          </div>
              )
            })
          }

        </div>
      </div>

    </>
  )
}

export default App;
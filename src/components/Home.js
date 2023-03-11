import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    
  return (
    <>
    <div style={{marginBottom:"70px"}}>
    <div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-dark p-4" >
    <h5 className="text-white h4">Collapsed content</h5>
    <span className="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
</div>
    <div style={{display:"flex",columnGap:"50px",justifyContent:"center"}}>
    <div className="card border-light mb-3" style={{maxWidth: "18rem"}}>
  <div className="card-header"><Link to={'/signup'}>Signup</Link></div>
  <div className="card-body">
    <h5 className="card-title">Light card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>

<div className="card border-light mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Download APK</div>
<div className="card-body">
  <h5 className="card-title">Light card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>

<div className="card border-light mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Connect to different platforms</div>
<div className="card-body">
  <h5 className="card-title">Light card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>

<div className="card border-light mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header"><Link to={'/about'}>About us</Link></div>
<div className="card-body">
  <h5 className="card-title">Light card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
</div>
</>
  )
}

export default Home
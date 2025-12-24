import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Error.css'

const Error = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="main-1">
            <h1 className="life">Not Found</h1>
            <h3 className="h3-life"> The page you’re looking for doesn’t exist or has moved.</h3>
            <div className="btn-menu">
                <button onClick={() => navigate('/hero')}>Go Home</button>
            </div>
          </div>
        </div>
      </div>

      <div className="error-img">
        <div className="container">
            <div className='error'>
            <img src="/Error.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Error

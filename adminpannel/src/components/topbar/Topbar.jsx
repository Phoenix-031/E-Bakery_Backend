import React from 'react'
import "./topbar.css";



const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span  className='logo'>Admin</span>
            </div>
            <div className="topRight">
                <div className="topbarIcons">
                    <div className="img-container">
                        <img src='https://image.shutterstock.com/image-photo/profile-picture-happy-friendly-young-600w-1863570355.jpg' alt='some image'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
import React from 'react'
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        Home
                    </li>
                    <li className="sidebarListItem">
                        Users
                    </li>
                    <li className="sidebarListItem">
                        Products
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Sidebar
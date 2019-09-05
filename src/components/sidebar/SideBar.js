import React from 'react'

const SideBar = () => {
    return (
        <div className="side-bar">
            <ul>
                <li>
                    <i className="fa fa-home"></i>
                    <button>HOME</button>
                </li>
                <li>
                    <i className="fa fa-plane"></i>
                    <button>FLIGHT</button>
                </li>
                <li>
                    <i className="fa fa-key"></i>
                    <button>CAR RENTAL</button>
                </li>
                <li>
                    <i className="fa fa-map"></i>
                    <button>TOUR</button>
                </li>
            </ul>
        </div>
    )
}
export default SideBar
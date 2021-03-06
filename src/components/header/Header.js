import React from 'react'

const Header = () =>{
    return (
        <header>
            <div className="logo"><img src={ require('./logo.png') } alt=""/></div>
            <div className="search-box">
                <input placeholder="search hotels"/>
            </div>
            <div className="icons">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </header>
    )
}
export default Header
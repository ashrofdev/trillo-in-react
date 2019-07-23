import React from 'react'

const HotelInfo = () => {
    return (
        <div className="hotel-info">
            <div className="big-card">
                {'big card'}
            </div>
            <div className="small-cards">
                <div className="small-card">
                    {'small card'}
                </div>
                <div className="small-card">
                    {'small card'}
                </div>
                <button>Show all &rarr;</button>
            </div>
        </div>
    )
}
export default HotelInfo
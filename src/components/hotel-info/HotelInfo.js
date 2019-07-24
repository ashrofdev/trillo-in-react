import React from 'react'

const HotelInfo = () => {
    return (
        <div className="hotel-info">
            <div className="big-card">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Animi nisi dignissimos debitis ratione sapiente saepe.
                 Accusantium cumque, quas, ut corporis incidunt deserunt quae 
                 architecto voluptate.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Animi nisi dignissimos debitis ratione sapiente saepe.
                 </p>
                <ul>
                    <li>Close to the beach</li>
                    <li>Breakfast included</li>
                    <li>Free airport shuttle</li>
                    <li>Free internet in all rooms</li>
                    <li>Air conditioning and heating</li>
                    <li>Pets allowed</li>
                    <li>We speak all languages</li>
                    <li>Perfect for families</li>
                </ul>
                <div className="bottom">
                    <p>Lucy and 3 other friends recommend this hotel.</p>
                    <figure>
                        123
                    </figure>
                </div>
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
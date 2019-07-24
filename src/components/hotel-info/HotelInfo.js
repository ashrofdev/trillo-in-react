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
                    <div className="fig">
                        <img src={ require('./info-img/user-2.jpg') } alt=""/>
                        <img src={ require('./info-img/user-3.jpg') } alt=""/>
                        <img src={ require('./info-img/user-4.jpg') } alt=""/>
                        <img src={ require('./info-img/user-5.jpg') } alt=""/>
                    </div>
                </div>
            </div>
            <div className="small-cards">
                <div className="small-card">
                    <p className="review">
                    Lorem ipsum dolor sit amet,
                     consectetur adipisicing elit. Fuga doloremque architecto 
                     dicta animi, totam, itaque officia ex.
                    </p>
                    <div className="detail">
                        <img src={ require('./info-img/user-1.jpg') } alt=""/>
                        <div className="txt">
                            <h3>NICK SMITH</h3>
                            <span>FEB 27th, 2019</span>
                        </div>
                        <div style={{fontSize: '3rem', color: 'red'}}>
                            7.5
                        </div>
                    </div>
                </div>
                <div className="small-card">
                    <p className="review">
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Fuga doloremque architecto 
                        dicta animi, totam, itaque officia ex.
                    </p>
                    <div className="detail">
                        <img src={ require('./info-img/user-6.jpg') } alt=""/>
                        <div className="txt">
                            <h3>MARY THOMAS</h3>
                            <span>FEB 27th, 2019</span>
                        </div>
                        <div style={{fontSize: '3rem', color: 'red'}}>
                            9.3
                        </div>
                    </div>
                </div>
                <button>Show all &rarr;</button>
            </div>
        </div>
    )
}
export default HotelInfo
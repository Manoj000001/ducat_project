import React from 'react'
import "./css/cards.css"
function Cards(props) {
    return (
        <>
            <div className="cards">
                <div className="cardlist">
                    <div>
                        <img src={props.src} alt="" height="80px" width="80px" />
                    </div> <hr />
                    <div className='data'>
                        <h3>Dev Oops</h3>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <div>Branch-noida sector 16</div>
                        <div>starting date - 2024-02-04</div>
                        <div>
                            <button id='btn'>request call back</button>
                        </div>
                    </div>
                </div>
            </div>

          
        </>
    )
}

export default Cards

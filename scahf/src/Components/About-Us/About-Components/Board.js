import React from 'react';
import "../About.css";


function Board() {
  return (
    <div className='board-container'>
        <h3>Executive Board Members</h3>
        <section className='board-section'>
            <div>
                <div class='board-img'>
                    <div id='first-image'></div>
                </div>
                <h5>Dabota Omubo-Pepple</h5>
                <p>EXECUTIVE DIRECTOR</p>
            </div>

            <div>
                <div class='board-img'>
                    <div id='second-image'></div>
                </div>
                <h5>Dr Joseph .O. Agbi</h5>
                <p>BOARD MEMBER</p>
            </div>

            <div>
                <div class='board-img'> 
                    <div id='third-image'></div>
                </div>
                <h5>Prof. Kaladada Korubo</h5>
                <p>BOARD MEMBER</p>
            </div>

            <div>
                <div class='board-img'> 
                    <div id='fourth-image'></div>    
                </div>
                <h5>Basuo Telimoye</h5>
                <p>BOARD MEMBER</p>
            </div>

            <div>
                <div class='board-img'> 
                    <div id="fifth-image"></div> 
                </div>   
                <h5>Dr Okeagu Kelechi M.</h5>
                <p>BOARD MEMBER</p>
            </div>

            <div>
                <div class='board-img'>
                    <div id="sixth-image"></div> 
                </div>
                <h5>Ebenezar Wikina</h5>
                <p>BOARD MEMBER</p>
            </div>
        </section>
    </div>
  )
}

export default Board
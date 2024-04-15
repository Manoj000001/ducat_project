import React from 'react'
import './css/middel.css'
function Middel() {

  return (
    <>
<div className="slider">
  <div className="images">
    <div className='slide'>

    <img src="images/img1.png" alt="" />
    </div>
    <div className='slide'>
    <img src="images/img2.png" alt="" />
    </div>
    <div className='slide'>

    <img src="images/img3.png" alt="" />
    </div>
    <div className='slide'>

    <img src="images/img4.png" alt="" />
    </div>
  </div>
</div>

      <div className="categerious">
        <div className="catlist">
          <div className='human'>
            <img src="images/human.png" alt="..." height="70px" />
            <div>Learn The Essential Skills</div>
          </div>
          <div class="certificate">
            <img src="images/certificate.png" alt="" height="70px" />
            <div>Earn Certificates And Degrees</div>
          </div>
          <div class="education">
            <img src="images/education.png" alt="" height="70px" />
            <div>Get Ready for The Next Career</div>
          </div>
          <div class="master">
            <img src="images/master.png" alt="" height="70px" />
            <div>Master at Different Areas</div>
          </div>
        </div>
      </div>

      <div className="form">
        <form action="">
          <input type="text" placeholder='enter name' />
          <input type="email" placeholder='enter email' />
          <input type="number" placeholder='enter number' />
          <input type="course" placeholder='enter course' />
          <input type="branch" placeholder='enter branch' />
          <button type='submit'>submit</button>
        </form>
      </div>


      <div className="program">
        <h2>Explore Top Programs</h2>

        <div className="programlist">
          <div className="list1">
            <div>
              <img src="images/p1.png" alt="" height="80px" width="80px" />
            </div>
            <div>graphic design</div>
          </div>
          <div className="list1">
            <div>
              <img src="images/p2.png" alt="" height="80px" width="80px" />
            </div>
            <div>graphic design</div>
          </div>
          <div className="list1">
            <div>
              <img src="images/p3.png" alt="" height="80px" width="80px" />
            </div>
            <div>graphic design</div>
          </div>
          <div className="list1">
            <div>
              <img src="images/p4.png" alt="" height="80px" width="80px" />
            </div>
            <div>graphic design</div>
          </div>
          <div className="list1">
            <div>
              <img src="images/p5.png" alt="" height="80px" width="80px" />
            </div>
            <div>graphic design</div>
          </div>
          <div className="list1">
            <div>
              <img src="images/p6.png" alt="" height="80px" width="80px" />
            </div>
            <div>graphic design</div>
          </div>
          <div className="list1">
            <div>
              <img src="images/p7.png" alt="" height="80px" width="80px" />
            </div>
            <div>graphic design</div>
          </div>
          <div className="list1">
            <div>
              <img src="images/p8.png" alt="" height="80px" width="80px" />
            </div>
            <div>graphic design</div>
          </div>
          <div className="list1">
            <div>
              <img src="images/p9.png" alt="" height="80px" width="80px" />
            </div>
            <div>graphic design</div>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Middel

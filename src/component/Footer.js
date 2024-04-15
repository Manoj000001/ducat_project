import React from 'react'
import "../css/footer.css"
function Footer() {
  return (
    <>
   <div className="footer">
    <div className="allfooter">
    <div className="first">
        <h3>Follow Us!</h3>
        <i class="fa-brands fa-facebook" ></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-solid fa-face-smile"></i>
    </div>
    <div className="two">
    <h3>Quick Links</h3>
<div>Java</div>
<div>Python</div>
<div>.Net</div>
<div>Web Designing</div>
<div>Programming Languages</div>
<div>Cloud Computing</div>
    </div>
    <div className="three">
    <h3>Top Courses</h3>
<div>Data Science</div>
<div>Data Analytics</div>
<div>Java Full Stack</div>
<div>Artificial Intelligence</div>
<div>UI & UX Designing</div>
<div>Cloud Computing</div>
    </div>
    <div className="four">
        <h3>Policies</h3>
    </div>
    <div className="five">
        <h3>Connect</h3>
        <div>Join our mailing list and get exclusive discounts, early product launch access and more.</div>
        <input type="text" placeholder='enter name' />
        <button type='submit'>submit</button>
    </div>
   </div>
   </div>
    </>
  )
}

export default Footer

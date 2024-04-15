import React from 'react'
import Contactprop from './Contactprop'
import '../css/contact.css'
function Contact() {
  return (
    <>
    <div className="contact">
        <h1>oue branches</h1>
        <div className="ccenter">
        <Contactprop add="Noida Sector 16" ph="Phone : 9999993213" email="Email : info@ducatindia.com" 
        address="Address : A-43 & A-52, Sector 16, Behind MacD, Noida, 201301, UP"/>
        <Contactprop add="Noida Sector 63" ph="Phone :  7042175774" email="Email : info@ducatindia.com" 
        address="Address : H-43, Sector-63, Noida (Near Electronic City Metro Station)"/>
        <Contactprop add="Pitampura" ph="Phone :  7042175774" email="Email : info@ducatindia.com" 
        address="Address : Plot No. 366, 2nd Floor, Kohat Enclave, Pitampura, ( Near- Kohat Metro Station) Above Allahabad Bank, New Delhi- 110034."/>
        <Contactprop add="South Ex." ph="Phone : 9999993213" email="Email : info@ducatindia.com" 
        address="Address : D-27,South Extension-1 New Delhi-110049"/>

        </div>
        <div className="iframe">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923175604!2d77.2370107568872!3d28.522404036606094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1707377972482!5m2!1sen!2sin" width="700" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </>
  )
}

export default Contact


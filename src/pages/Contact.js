import React from 'react';
import BackBtn from '../components/BackBtn';

const Contact = () => {

    document.title = "Contact // Sumtwelve"

    return (
        <main className='subpage-main contact-main'>
            <h2>Contact</h2>
            <h3>
                For employment inquiries, the best way to contact me is
                through <a href="https://www.linkedin.com/in/noah-nielsen/" target="_blank" rel="noreferrer">LinkedIn.</a> I
                look forward to talking with you!
            </h3>
            <p>
                For all other inquiries, shoot me an email
                at<br/><strong>sumtwelve@gmail.com</strong>
            </p>
            <BackBtn />
        </main>
    )
};

export default Contact;
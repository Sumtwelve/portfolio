import React from 'react';

const Home = () => {

    document.title = "Noah Nielsen // Sumtwelve";

    return (
        <div className='homepage'>
            <img className='avatar-img-body-home avatar-img' src="./images/avatar-circle.png" alt="A simple icon representing the artist Sumtwelve."></img>
            <h2>Welcome!</h2>
            <h3>I'm Noah, and I make stuff. Specifically music and websites.</h3>
            <p>
                I made this site to showcase that stuff! That's it, really.
                I'm glad you're here ♥
            </p>
            <p>
                Use the tabs up top to navigate,
                I promise they don't bite.
            </p>
            <p>
                You can also use these links
                below to see where I've been spotted in the wild.
            </p>
            <section className='homepage-ext-links'>
                <a className='ext-link'
                   href='https://sumtwelve.bandcamp.com'
                   target='_blank'
                   rel='noreferrer'>
                        <img className='ext-link-img'
                             src='./images/ext-icons/bandcamp.png'
                             alt='A small icon representing Bandcamp'
                        />
                </a>
                <a className='ext-link'
                   href='https://github.com/Sumtwelve'
                   target='_blank'
                   rel='noreferrer'>
                        <img className='ext-link-img'
                             src='./images/ext-icons/github.png'
                             alt='A small icon representing GitHub'
                        />
                </a>
                <a className='ext-link'
                   href='https://www.linkedin.com/in/noah-nielsen/'
                   target='_blank'
                   rel='noreferrer'>
                        <img className='ext-link-img'
                             src='./images/ext-icons/linkedin.png'
                             alt='A small icon representing LinkedIn'
                        />
                </a>
                <a className='ext-link'
                   href='https://www.youtube.com/@sumtwelve4594'
                   target='_blank'
                   rel='noreferrer'>
                        <img className='ext-link-img'
                             src='./images/ext-icons/youtube.png'
                             alt='A small icon representing YouTube'
                        />
                </a>
                <a className='ext-link'
                   href='https://twitter.com/sumtwelveguy'
                   target='_blank'
                   rel='noreferrer'>
                        <img className='ext-link-img'
                            src='./images/ext-icons/twitter.png'
                            alt='A small icon representing Twitter'
                        />
                </a>
                <a className='ext-link'
                   href='https://www.instagram.com/sum.twelve/'
                   target='_blank'
                   rel='noreferrer'>
                        <img className='ext-link-img'
                             src='./images/ext-icons/instagram.png'
                             alt='A small icon representing Instagram'
                        />
                </a>
            </section>
        </div>
    )
};

export default Home;
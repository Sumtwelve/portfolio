import React from 'react';
import { Link } from 'react-router-dom';
import BackBtn from '../components/BackBtn';

const About = () => {

    document.title = "About // Sumtwelve"

    return (
        <>
            {/* <span className='about-nav-joiner' /> */}
            <main className='subpage-main about-main'>
                <h2>About</h2>
                <p>
                    Hello! My name is Noah Nielsen. I'm just another creative who's ready to start
                    his career. I write web apps and music mainly, and I've got a lot to learn
                    about both, but I'm loving the journey so far.
                </p>
                <p>
                    I believe technology has the power to make life easier and more enjoyable
                    for everyone. I also believe everyone should be able to learn about tech
                    and fully understand how our modern world works.
                </p>
                <h3>Me & You</h3>
                <p>
                    If you're looking for a web developer, I would make a good intern or
                    junior dev. You can check out my <Link to="/dev">Web Developer
                    portfolio</Link> or the <Link to="/resume">Resume page</Link> to get an idea of the skills I have and how I can
                    benefit your workforce. I'm open to learning new things and ready to
                    make awesome apps with you! Send me a message
                    on <a href="https://www.linkedin.com/in/noah-nielsen-22b2251a6/"
                    target='_blank' rel='noreferrer'>LinkedIn</a> or check out
                    the <Link to="/contact">Contact</Link> page for more options.
                </p>
                <h3>My story</h3>
                <p>
                    Music and coding entered my life at about the same time, when I was 12.
                    The year was 2011, and my parents gave me a Nintendo DSi for Christmas.
                    I was ecstatic! Inspired by my older brother, I bought a little music-making
                    game called Rytmik. It was just a sequencer with a bunch of synth-ish presets
                    built in, but to me it was a place I could express myself and the songs that
                    had been swirling around in my head since I was little.
                </p>
                <p>
                    Somewhere within that same time period, my best friend
                    introduced me to the game <i>Minecraft</i>. It was an
                    entrancing game, and I quickly fell in love with it. I found out that the game
                    was written in a 'programming language' called <i>Java</i>. I can't remember
                    now what exactly pushed me to do it, but I started looking up Java tutorials
                    online. Maybe I thought that if someone could write a game
                    like <i>Minecraft</i> in Java, then I could make cool stuff with it too.
                </p>
                <p>
                    And I think I was right. My first major project in Java, which also turned out to
                    be the largest endeavor I'd ever undertaken, came about because of another
                    obscure obsession I'd acquired. When I was about 13, I was very interested
                    in messing with the game files of my copy of <i>Harry Potter and the Chamber
                    of Secrets</i> for PC. It's an old game that doesn't bother hiding its inner
                    workings, and I discovered you could actually edit the game's cutscenes.
                    It was a lot of fun, but editing them manually in Notepad was very tedious.
                    I wondered if I could write a program that would make it easier...
                </p>
                <p>
                    So that's what I set out to do: Create a text editor to facilitate hacking an
                    11-year-old Harry Potter game. It proved far more difficult than those online
                    Java tutorials could have prepared me for, but I did the best I could
                    with what I knew, and after 3 or so years of on-and-off work, I finally
                    had it. My Harry Potter cutscene editor. It was (and still is) one of the
                    proudest moments of my life. Not because I could finally hack this obscure
                    game, but because I set my mind to something and actually accomplished it.
                </p>
                <p>
                    That is why I love programming. It is extremely rewarding to push through
                    and figure something out. To take something complex and make it easier.
                    And when things become easier, it helps us become better faster. Lots of
                    doors open when we use tech to make things easier.
                </p>
                <p>
                    Since then, programming has played just a minor role in my life. But now,
                    I'm ready to learn and do so much more.
                </p>
                <p style={{textAlign: 'center', marginTop: '50px'}}>
                    Thanks for reading <span style={{padding: '0 10px'}}>♥</span> This means a lot to me.
                </p>
                <BackBtn />
            </main>
        </>
    )
};

export default About;
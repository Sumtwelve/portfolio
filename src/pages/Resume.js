import React from 'react';
import BackBtn from '../components/BackBtn';
import FrontendSkillsList from '../components/FrontendSkillsList';
import BackendSkillsList from '../components/BackendSkillsList';

import resumeFile from '../db/resume/Noah-Nielsen-Resume.pdf'

const Resume = () => {

    document.title = "Resume // Sumtwelve"

    return (
        <main className='subpage-main resume-main'>
            <h2>Resume</h2>
            <h3>View or download my official resume here!</h3>
            <div className='resume-buttons-box'>
                <a href={resumeFile} target='_blank' rel='noreferrer'>View Resume</a>
                <a href={resumeFile} download='Nielsen-Noah-Resume'>Download Resume</a>
            </div>
            <h3 className='summary-header'>SUMMARY</h3>
            <p>
                Here I've given some visual indicators on my comfort with
                different front- and back-end technologies. My actual
                expertise is of course limited given my experience,
                but this summarizes how familiar I am with the basics,
                and in turn how fluent I typically am when working
                with them.
            </p>
            <h4>Frontend Proficiences</h4>
            <FrontendSkillsList />
            <h4>Backend Proficiencies</h4>
            <BackendSkillsList />
            <BackBtn />
        </main>
    )
};

export default Resume;
import React from 'react';
import { Link } from 'react-router-dom';

// devData JSON structure:
// id: lowercase hyphenated version of title, used for react router
// title: name of the project
// description: a short description of the project
// description-long: more in-depth explanation of the project
// thumbnail: URL to the thumbnail
// technologies [String]: A list of technologies used to make the project
// url (optional): the URL where the project is deployed. Not all projects have this
// github: URL of the project's GitHub page

const WorkCard = ({ devData }) => {

    let visitAnchor = null;
    if (devData.url) {
        visitAnchor = ( <a href={devData.url} className='visit-link' target='_blank' rel='noreferrer'>VISIT &rarr;</a> );
    }

    return(
        <div className='work-card'>
            {visitAnchor}
            <div className='work-card-body'>
                <Link to={`${devData.id}`} className='work-link' devData={devData}>
                    <div className='work-card-img-box'>
                        <img src={devData.thumbnail} alt='' />
                    </div>
                    <h4>{devData.title}</h4>
                    <p className='work-card-desc'>{devData.description}</p>
                    <p className='work-card-tech'>{devData.technologies.join(' / ')}</p>
                </Link>
            </div>
        </div>
    )
}

export default WorkCard;
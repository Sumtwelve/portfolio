import React from 'react';
import { Link } from 'react-router-dom';

// JSON data structure:
// id: lowercase hyphenated version of title, used for react router
// title: name of the project
// description: a short description of the project
// description-long: more in-depth explanation of the project
// thumbnail: URL to the thumbnail
// technologies [String]: A list of technologies used to make the project
// url (optional): the URL where the project is deployed. Not all projects have this
// github: URL of the project's GitHub page

const WorkCard = ({ data }) => {

    let urlAnchor = null;
    if (data.url) {
        urlAnchor = ( <a href={data.url} target='_blank' rel='noreferrer'>Launch</a> );
    }

    return(
        <Link to={`${data.id}`} className='work-clickable' data={data}>
            <div className='work-card'>
                <div className='work-card-img-box'>
                    <img src='' alt='' />
                </div>
                <h4>{data.title}</h4>
                <p className='work-card-desc'>{data.description}</p>
                <p className='work-card-tech'>{data.technologies.join(' / ')}</p>
                {urlAnchor}
                <a href={data.github} target='_blank' rel='noreferrer'>GitHub</a>
            </div>
        </Link>
    )
}

export default WorkCard;
import React from 'react';
import { Link } from 'react-router-dom';

// data JSON structure:
// id: lowercase hyphenated version of title, used for react router
// title: name of the project
// description: a short description of the project
// description-long: more in-depth explanation of the project
// thumbnail: URL to the thumbnail
// technologies [String]: A list of technologies used to make the project
// url (optional): the URL where the project is deployed. Not all projects have this
// github: URL of the project's GitHub page

const WorkCard = ({ data }) => {

    let visitAnchor = null;
    if (data.url) {
        visitAnchor = ( <a href={data.url} className='visit-link' target='_blank' rel='noreferrer'>VISIT &rarr;</a> );
    }
    
    return(
        <div className='work-card'>
            {visitAnchor}
            <div className='work-card-body'>
                <Link to={`${data.id}`} className='work-link' data={data}>
                    <div className='work-card-img-box'>
                        <img src={data.thumbnail} alt={`A screenshot of the ${data.title} app.`} />
                    </div>
                    <h4>{data.title}</h4>
                    <p className='work-card-desc'>{data.description}</p>
                    <p className='work-card-tech'>{data.technologies.join(' / ')}</p>
                </Link>
            </div>
        </div>
    )
}

export default WorkCard;
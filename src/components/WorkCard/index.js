import React from 'react';

// data JSON structure:
// id: lowercase hyphenated version of title, used for react router
// title: name of the project
// description: a short description of the project
// descriptionLong: more in-depth explanation of the project (unused)
// thumbnail: URL to the thumbnail
// technologies [String]: A list of technologies used to make the project
// url (optional): the URL where the project is deployed. Not all projects have this
// github: URL of the project's GitHub page

const WorkCard = ({ data }) => {

    let visitAnchor = null;
    if (data.url) {
        visitAnchor = ( <a href={data.url} className='card-link visit-link' target='_blank' rel='noreferrer'>VISIT &rarr;</a> );
    }
    
    return(
        <div className='work-card'>
            <div className='work-card-body'>
                <div className='work-card-img-box'>
                    <img src={data.thumbnail} alt={`A screenshot of the ${data.title} app.`} />
                </div>
                <h4>{data.title}</h4>
                <p className='work-card-desc'>{data.description}</p>
                <p className='work-card-tech'>{data.technologies.join(' / ')}</p>
            </div>
            <div className='work-links-box'>
                <a href={data.github} className='card-link github-link' target='_blank' rel='noreferrer'>
                    <img src='images/ext-icons/github.png' alt='The GitHub logo'/>
                </a>
                {visitAnchor}
            </div>
        </div>
    )
}

export default WorkCard;
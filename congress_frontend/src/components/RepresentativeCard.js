import React from 'react';

const RepresentativeCard = (props) => {
    
    const rep = props.rep
    const capitalizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const twitter = `http://www.twitter.com/${rep.social.twitter}`
    const facebook = `http://www.facebook.com/${rep.social.facebook}`
    const youtube = `http://www.youtube.com/${rep.social.youtube}`

    return(
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{capitalizeFirst(rep.type)}<br/> {rep.bio.first_name} {rep.bio.last_name}</h5>
                    <p className="card-text">{rep.bio.party}</p>
                    <p className="card-text"><i>Birthdate:</i> {rep.bio.birthday}</p>
                    <p className="card-text">
                        <i>Phone:</i> 
                        <br /> 
                        {rep.contact.phone}
                    </p>
                    <p className="card-text">
                        <i>Address:</i>
                        <br />
                        {rep.contact.address}
                    </p>
                    <p className="card-text"><a href={rep.contact.url} className="text-decoration-none link-info">Website</a></p>
                    <div className="row">
                        <div className="col">
                            <a href={facebook} className="btn btn-primary">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                        <div className="col">
                            <a href={twitter} className="btn btn-warning">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                        <div className="col">
                            <a href={youtube} className="btn btn-success">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepresentativeCard;
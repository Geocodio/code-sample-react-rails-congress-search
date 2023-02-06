import React from 'react';
import { connect } from 'react-redux';
import RepresentativeCard from './RepresentativeCard.js';

const ResultsCard = ({ district }) => {
    const repsCards = district.current_legislators.length > 0 ? 
        district.current_legislators.map(rep => <RepresentativeCard key={rep.references.govtrack_id} rep={rep} />) : <div />
    
    return(
        <div className="results">
            <div className="row">
                <div className="district-name">
                    <h3>{district.name}</h3>
                </div>
                { repsCards }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        district: state.districtReducer
    }
}

export default connect(mapStateToProps)(ResultsCard);
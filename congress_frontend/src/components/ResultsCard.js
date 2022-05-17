import React from 'react';
import { connect } from 'react-redux';
import RepresentativeCard from './RepresentativeCard.js';

const ResultsCard = ({ district }) => {
    
    return(
        <div className="results">
            <div className="row">
                <h3>{district[0].name}</h3>
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
import React from 'react';

const SeasonDisplay = props => {
    return (
        <div>
            <div>latitude: {props.latitude}</div>
            <div>longitude: {props.longitude}</div>
           
        </div>
    );
}
export default SeasonDisplay;
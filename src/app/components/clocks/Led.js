import React from 'react';

const Led = ({status}) => {
    if(status == 0) {
        return(
            <div className="led">
                {status}
            </div>
        );
    }
    else {
        return(
            <div className="led on">
                {status}
            </div>
        );
    }
}

export default Led;
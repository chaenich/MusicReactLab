import React, {Fragment} from 'react';

const Song = ({song, number}) => {
    return (
        <Fragment>
            <h4>{number + 1}: {song["im:name"].label}</h4>
            <p>By: {song["im:artist"].label}</p>
        </Fragment>
    )
    }

    export default Song;

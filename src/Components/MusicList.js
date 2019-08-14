import React from 'react';
import Song from './Song';

const MusicList = (props) => {
  if (!props.music) return null;

  const newList = props.music.map((song, index) => {
    return <Song song={song} number={index} />
  })

  return(
    <div>
      {newList}
    </div>
  )
}
export default MusicList;

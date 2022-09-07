import React from 'react';
import MusicClass from './Music.module.css'
import Track from './Music/Track'

const Music = (props) => {

    let newTrackElem = React.createRef()
    let addNewTrack = () => {
        let newTrack = newTrackElem.current.value
        alert(newTrack)
    }
    let musicElement = props.musicData.map(musicElem => (<Track id={musicElem.id} author={musicElem.author} track={musicElem.track} time={musicElem.time}/>))
    return(
        <div className={MusicClass.content}>
            {musicElement}
            <div className={MusicClass.addTrack}>
        <textarea ref={newTrackElem}></textarea>
        <div>
          <button onClick={addNewTrack}>send track</button>
        </div>
      </div>
        </div>
    )
}

export default Music
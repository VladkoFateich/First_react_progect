import MusicClass from './Music.module.css'
import Track from './Music/Track'

const Music = (props) => {

    let musicElement = props.musicData.map(musicElem => (<Track id={musicElem.id} author={musicElem.author} track={musicElem.track} time={musicElem.time}/>))
    return(
        <div className={MusicClass.content}>
            {musicElement}
        </div>
    )
}

export default Music
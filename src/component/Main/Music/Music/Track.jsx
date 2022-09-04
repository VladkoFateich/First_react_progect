import TrackClass from "./Track.module.css";

const Track = (props) => {
  return (
      <div className={TrackClass.trackBox}>
        <div className={TrackClass.id}>{props.id}</div>
        <div className={TrackClass.author}>{props.author}</div>
        <div className={TrackClass.track}>{props.track}</div>
        <div className={TrackClass.time}>{props.time}</div>
      </div>
  );
};

export default Track;

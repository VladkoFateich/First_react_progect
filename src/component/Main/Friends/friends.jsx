import React from 'react';
import FriendsClass from './friends.module.css'

const Friends = (props) => {
    let newFriendElem = React.createRef()
    let addNewFriend = () => {
        let newFriend = newFriendElem.current.value
        props.addFriend(newFriend)
    }
    return (
        <div className={FriendsClass.content}>FRIENDS
        <div>
        <textarea ref={newFriendElem}></textarea>    
        </div>
        <button onClick={addNewFriend}>add friends</button>
        </div>
    )
}

export default Friends
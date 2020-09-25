import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Video.js';
import db from './firebase.js';

function App() {

const [videos, setVideos] = useState([]);

useEffect(() => { db.collection('videos').onSnapshot(snapshot => { 
  setVideos(snapshot.docs.map(doc => doc.data()))
})
}, [])

  return (
    //BEM
    <div className="app">
    <div className="app_videos">
{videos.map(({url, channel, description, song, likes, shares, messages}) => (

    <Video 
    channel={channel}
    song={song}
    likes={likes}
    messages={messages}
    description={description}
    shares={shares}
    url={url}

    />
    )
)}
        </div>
    </div>
  );
}



export default App;

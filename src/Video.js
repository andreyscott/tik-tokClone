import React, { useRef, useState  } from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import './Video.css';
import './firebase';

function Video({ url, channel, description, song, likes, messages, shares  }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
    	if (playing) {
         videoRef.current.pause();
         setPlaying(false);
    }
    	else {
    		videoRef.current.play();
    			setPlaying(true);
    	}
};
	return ( 
	<div className="video">
	<video 
    className="video_player"
    loop
    onClick={onVideoPress}
    ref={videoRef}
	src={url}>
	</video>
	<VideoFooter channel={channel} 
	             description={channel}
	             song={song} />

	             <VideoSidebar 
	             likes={likes} 
	             shares={shares} 
	             messages={messages} />	
	       	</div>

)
}

export default Video;
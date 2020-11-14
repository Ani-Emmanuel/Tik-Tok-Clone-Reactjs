import React, { useRef, useState } from 'react';
import '../App.css';
import Footer from './footer';
import SideBar from './sideBar';
const Video = () => {
	const videoRef = useRef(null);

	const [playing, setPlaying] = useState(false);

	const onVideoPress = () => {
		if (playing) {
			setPlaying(false);
			videoRef.current.pause();
		} else {
			setPlaying(true);
			videoRef.current.play();
		}
	};

	return (
		<div className='video'>
			{/* <p style={{ color: 'black' }}>this is the video</p> */}
			<video
				loop
				className='video_player'
				onClick={onVideoPress}
				ref={videoRef}
				src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
				// src=""
			></video>
			<SideBar />
			<Footer />
		</div>
	);
};

export default Video;

import React, { useRef, useState } from 'react';
import '../App.css';
import Footer from './footer';
import SideBar from './sideBar';

const Video = ({ description, sources, title, subtitle }) => {
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
			<video
				loop
				className='video_player'
				onClick={onVideoPress}
				ref={videoRef}
				src={sources}
				// src=""
			></video>
			<SideBar />
			<Footer description={description} title={title} subtitle={subtitle} />
		</div>
	);
};

export default Video;

import React from 'react';
import './App.css';
import Video from './components/video';

function App() {
	return (
		<div className='App'>
			<div className='video_card'>
				<Video />
				<Video />
				<Video />
				<Video />
			</div>
		</div>
	);
}

export default App;

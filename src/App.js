import React, { useState } from 'react';
import payload from './asset/data/videoCollection';
import Video from './components/video';
import './App.css';

function App() {
	const [data] = useState(payload);
	const { categories } = data;
	return (
		<div className='App'>
			<div className='video_card'>
				{categories[0].videos.map((video, index) => {
					return (
						<Video
							key={index}
							description={video.description}
							sources={video.sources[0]}
							title={video.title}
							subtitle={video.subtitle}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;

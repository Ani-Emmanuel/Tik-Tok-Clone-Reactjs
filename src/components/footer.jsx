import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import disk from '../asset/934821-200.png';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footerText'>
				<h3>@Urenna</h3>
				<p>Hello for the footer</p>
				<MusicNoteIcon />
			</div>
			<img id='img' src={disk} alt='' />
		</div>
	);
};

export default Footer;

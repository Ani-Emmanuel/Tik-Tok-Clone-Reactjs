import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
// import AlbumIcon from '@material-ui/icons/Album';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footerText'>
				<p>@Urenna</p>
				<p>Hello for the footer</p>
			</div>
			<div className='icons'>
				<div className='music'>
					<MusicNoteIcon />
				</div>
				<div className='disc'>
					<img
					id="img"
						src='https://static.thenounproject.com/png/934821-200.png'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;

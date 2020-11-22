import React from 'react';
import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import disk from '../asset/img/934821-200.png';

const Footer = ({ description, title, subtitle }) => {
	return (
		<div className='footer'>
			<div className='footerText'>
				<h3>@{title}</h3>
				<p>{subtitle}</p>
				<MusicNoteIcon />
			</div>
			<img id='img' src={disk} alt='' />
			<div className='ticker'>
				<Ticker mode='smooth'>
					{({ index }) => (
						<>
							<p>{description}</p>
						</>
					)}
				</Ticker>
			</div>
		</div>
	);
};

export default Footer;

import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const SideBar = () => {
	return (
		<div className='sidebar'>
			<div className='sideBarIcon'>
				<FavoriteIcon />
				<p>300</p>
			</div>
			<div className='sideBarIcon'>
				<MessageIcon />
				<p>400</p>
			</div>
			<div className='sideBarIcon'>
				<ShareIcon />
				<p>600</p>
			</div>
		</div>
	);
};

export default SideBar;

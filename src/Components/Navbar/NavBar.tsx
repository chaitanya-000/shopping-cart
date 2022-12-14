import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/store');
	};
	return (
		<AppBar
			position='static'
			sx={{ bgcolor: 'transparent', color: 'black' }}
		>
			<Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
				<Button color='inherit'>HOME</Button>
				<Button
					color='inherit'
					onClick={handleClick}
				>
					STORE
				</Button>
				<Button color='inherit'>ABOUT</Button>
				<Button color='inherit'>
					<ShoppingCartOutlinedIcon fontSize='large' />
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;

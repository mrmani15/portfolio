import React from 'react';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top px-4'>
			<a href='#home' className='navbar-brand'>
				<img
					src='/logo.png'
					alt='MR'
					className='img-fluid img-resize ml-1'
				/>
			</a>
			<button
				className='navbar-toggler'
				data-toggle='collapse'
				data-target='#collapse_target'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div
				className='collapse navbar-collapse justify-content-end'
				id='collapse_target'
			>
				<ul className='navbar-nav nav nav-bar'>
					<li className='nav-item ml-3'>
						<a
							href='#home'
							className='nav-link text-warning font-weight-bolder'
						>
							HOME
						</a>
					</li>
					<li className='nav-item ml-3'>
						<a
							href='#aboutme'
							className='nav-link text-warning font-weight-bolder'
						>
							ABOUT ME
						</a>
					</li>
					{/* <li className='nav-item ml-3 mr-4'>
						<a
							href='#experience'
							className='nav-link text-warning font-weight-bolder'
						>
							EXPERIENCE
						</a>
					</li> */}
					<li className='nav-item ml-3'>
						<a
							href='#techskill'
							className='nav-link text-warning font-weight-bolder'
						>
							TECH & SKILL
						</a>
					</li>

					<li className='nav-item ml-3'>
						<a
							href='#project'
							className='nav-link text-warning font-weight-bolder'
						>
							PROJECTS
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

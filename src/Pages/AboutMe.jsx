import React from 'react';
import MyDetail from '../components/MyDetail';
import Know from '../components/Know';
import Social from '../components/Social';

const AboutMe = () => {
	return (
		<div className='container-fluid p-5' id='aboutme'>
			<center>
				<h1 className='underline'>About me</h1>
			</center>
			<div className='row mt-2'>
				<div className='col-xl-6 col-sm-12'>
					<MyDetail />
				</div>
				<div className='col-xl-6 col-sm-12'>
					<Social />
				</div>
			</div>
			<div className='row mt-4'>
					<Know />
			</div>
		</div>
	);
};

export default AboutMe;



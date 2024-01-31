import React from 'react';
import Card from '../components/Card';
import { BsChevronDoubleUp } from 'react-icons/bs';


import { data } from '../components/Data';
const Projects = () => {
	return (
		<div className='container-fluid p-5' id='project'>
			<center>
				<h1 className='underline'>Projects</h1>
			</center>
      <div className='row justify-content-center'>
			{data &&
				data.map((project, index) => {
					return <Card project={project} key={index} />;
				})}
      </div>
			<div className='d-flex justify-content-end'>
				<a href='#home' className='text-white border btn btn-secondary rounded-pill'>Top<BsChevronDoubleUp /></a>
			</div>
		</div>
	);
};

export default Projects;

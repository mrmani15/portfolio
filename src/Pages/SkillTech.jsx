import React from 'react';
import GoodTech from '../components/GoodTech';
import Tool from '../components/Tool';

const SkillTech = () => {
	return (
		<div className='p-5' id='techskill'>
			<h1 className='underline text-center'>Tech & Tools</h1>
			<GoodTech />
			<Tool />
		</div>
	);
};

export default SkillTech;

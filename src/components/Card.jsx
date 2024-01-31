import React from 'react';

const Card = props => {
	return (
		<div className='card card-hover bg-dark m-3 col-sm-12 col-md-6 col-lg-4 col-xl-3'>
			<img
				src={props.project.image}
				className='card-img-top card-hover rounded-lg pt-3'
				alt={props.project.alt}
			/>
			<div className='card-body'>
				<h5 className='card-title text-center text-warning'>
					{props.project.name}{' '}
				</h5>
				<p className='card-text text-center h5'>{props.project.desc}</p>
				<div className='mb-1 d-flex justify-content-around'>
					{props.project.icon.map((icon, index) => {
						return (
							<img
								className='mt-2 ml-2 icon-hover'
								src={icon.link}
								alt={icon.alt}
								title={icon.title}
								width='30'
								key={index}
							/>
						);
					})}
				</div>
				<div className='card-link'>
					{props.project.live ? (
						<a
							href={props.project.live}
							className='btn btn-outline-info mt-3 font-weight-bolder'
							target='_blank'
							rel='noopener noreferrer'
						>
							Live
						</a>
					) : null}
					{props.project.code ? (
						<a
							href={props.project.code}
							className='btn btn-info mt-3 font-weight-bolder'
							target='_blank'
							rel='noopener noreferrer'
						>
							Github
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Card;

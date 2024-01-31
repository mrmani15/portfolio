import React from 'react';

const Know = () => {
	return (
		<div className='w-100 p-3'>
			<center>
				<h4 className='font-weight-bolder text-warning '>
					I Can Deal With
				</h4>
			</center>
			<div className='bg-dark rounded-pill p-4 mt-4 d-flex flex-wrap justify-content-around'>
				<div className='text-center'>
					<img
						src='https://i.ibb.co/C76nVhV/frontend.png'
						className='img-fluid mx-auto d-block'
						alt='Frontend'
						width='70'
					/>
					<div className='media-body'>
						<h5 className='mt-2 mb-1 text-warning'>Frontend</h5>
						<p className='text-white font-weight-bolder'>
							I can build the frontend using HTML, CSS, Bootstrap,
							Javascript, React & Redux.
						</p>
					</div>
				</div>

				<div className='text-center'>
					<img
						src='https://i.ibb.co/J28nH1g/datastructure.png'
						className='d-flex img-fluid mx-auto'
						alt='Data Structures'
						width='70'
					/>
					<div className='media-body'>
						<h5 className='mb-1 text-warning'>
							Backend
						</h5>
						<p className='text-white font-weight-bolder'>
							I can build Backend with the help of Node.js, MongoDB & MYSQL.
						</p>
					</div>
				</div>

				<div className='text-center'>
					<img
						src='img/backend.png'
						className='d-flex img-fluid mx-auto'
						alt='Backend'
						width='70'
					/>
					<div className='media-body'>
						<h5 className='mt-2 mb-1 text-warning'>
							Data Structures - Basics
						</h5>
						<p className='text-white font-weight-bolder'>
							I know the basics data Structures and Algorithm
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Know;

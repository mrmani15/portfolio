import React from 'react';

const Internship = () => {
	return (
		<div className='container-fluid p-5' id='experience'>
			<center>
				<h1 className='intern text-warning pb-5'>EXPERIENCE</h1>
			</center>
			<div className='rounded-lg p-4 bg-dark mt-4 text-center'>
				<h2 className='intern text-warning'>Working</h2>
				<h4>
					Currently, I am working in{' '}
					<b>
						<a
							className='text-warning'
							href='https://www.railrecipe.com/'
						>
							Amiure International Private Limited
						</a>
					</b>{' '}
					as a full-Stack Web Developer since October 2020. Here I am Responsible for
					Updating and optimizing Frontend code, recreating and deploying dashboard in NodeJS.
				</h4>
			</div>
			<div className='rounded-pill p-4 bg-dark mt-4 text-center'>
				<h2 className='intern text-warning'>Internship</h2>
				<h4>
					I have a one-month internship at <b><a
							href='https://www.quillhash.com/'
							className='text-warning'
						>Quillhash Technology</a></b>. where I work on product {' '}
					<b>
						<a
							href='https://zeptagram.com/'
							className='text-warning'
						>
							zeptagram.com
						</a>{' '}
					</b>
					as a <b>React Developer</b> role.
				</h4>
				<a
					className='btn btn-info btn-lg mt-4 font-weight-bolder'
					href='Internship letter.pdf'
					target='_blank'
				>
					CERTIFICATE
				</a>
			</div>
		</div>
	);
};

export default Internship;

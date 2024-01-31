import React from 'react';

const Tool = () => {
	return (
		<div className='col-sm-12 md-6 row-6 p-4'>
			<h2 className='text-center'>TOOL FAMILIARITY</h2>
			<div className='col-12 bg-dark p-4 mt-4 rounded-pill col-sm-12 row-6'>
				<ul className='list-unstyled col-md-12'>
					<li className='media p-3'>
						<div className='d-flex flex-wrap w-100'>
							<img
								src='img/npm.svg'
								className='mx-auto my-2 d-block'
								alt='Npm'
								title='Npm'
								width='90'
							/>
							<img
								src='img/github.svg'
								className='mx-auto my-2 d-block'
								alt='Github'
								title='Github'
								width='90'
							/>
							<img
								src='img/postman.svg'
								className='mx-auto my-2'
								alt='Postman'
								title='Postman'
								width='90'
							/>
							<img
								src='img/netlify.svg'
								className='mx-auto my-2 d-block'
								alt='Netlify'
								title='Netlify'
								width='90'
							/>
							<img
								src='img/heroku.png'
								className='mx-auto my-2 d-block'
								alt='Heroku'
								title='Heroku'
								width='90'
							/>
							<img
								src='img/vscode.png'
								className='mx-auto my-2 d-block'
								alt='Visual Studio Code'
								title='Visual Studio Code'
								width='90'
							/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Tool;

import React from 'react';

const Social = () => {
	return (
		<div>
			<center>
				<h4 className='font-weight-bolder text-warning'>
					Social Appearances
				</h4>
			</center>
			<div className='col-12 bg-dark mt-4 rounded-pill col-sm-12 row-6'>
				<ul className='list-unstyled col-md-12'>
					<li className='media p-4'>
						<div className='d-flex ml-2 flex-wrap w-100 justify-content-around'>
							<a
								href='https://github.com/mrmani15/'
								target='blank'
							>
								<img
									src='img/github.svg'
									alt='Github'
									width='60'
									className='m-1 ml-4'
									title='Github'
								/>
							</a>
							<a
								href='https://linkedin.com/in/manish-rahul/'
								target='blank'
							>
								<img
									src='/linkedin.png'
									alt='LinkedIn'
									width='60'
									className='m-1 ml-4'
									title='LinkedIn'
								/>
							</a>
							<a
								href='https://twitter.com/_Manish_Rahul'
								target='blank'
							>
								<img
									src='img/twitter.png'
									alt='Twitter'
									width='60'
									className='m-1 ml-4'
									title='Twitter'
								/>
							</a>
							<a
								href='https://www.hackerrank.com/ManishRahul'
								target='blank'
							>
								<img
									src='/HackerRank.png'
									alt='Hackerrank'
									width='60'
									className='m-1 ml-4'
									title='Hackerrank'
								/>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Social;

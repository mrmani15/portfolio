import React from 'react';

const FamiliarTech = () => {
	return (
		<div className='col-sm-12 md-6 row-6 p-4'>
			<h2 className='text-center'>TECH FAMILIAR WITH</h2>
			<div className='col-12 bg-dark p-4 mt-4 rounded-pill col-sm-12 row-6'>
				<ul className='list-unstyled col-md-12'>
					<li className='media p-3'>
						<div className='d-flex flex-wrap w-100'>
							<img
								src='img/nodejs.svg'
								className='mx-auto my-2 d-block'
								alt='Node js'
								title='Node js'
								width='90'
							/>
							<img
								src='img/mongodb.svg'
								className='mx-auto my-2 d-block'
								alt='Mongodb'
								title='Mongodb'
								width='90'
							/>
							<img
								src='img/firebase.png'
								className='mx-auto my-2'
								alt='Firebase'
								title='Firebase'
								width='90'
							/>
							<img
								src='img/native.png'
								className='mx-auto my-2 d-block'
								alt='React Native'
								title='React Native'
								width='90'
							/>
							<img
								src='img/next.png'
								className='mx-auto my-2 d-block'
								alt='NEXT.JS'
								title='NEXT.JS'
								width='90'
							/>
							<img
								src='img/mysql.png'
								className='mx-auto my-2 d-block'
								alt='MySql'
								title='MySql'
								width='90'
							/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default FamiliarTech;

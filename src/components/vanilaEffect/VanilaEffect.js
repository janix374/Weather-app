import React from 'react';

const VanilaEffect = (props) => {
	return (
		<div className='tilt-flex-container'>
			<div className='tilt-container'>
				<div className='tilt-box-wrap'>
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<span className='t_over' />
					<div className='tilt-box'>
						<div className='title-box-img'>{props.children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VanilaEffect;

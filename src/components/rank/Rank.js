import React from 'react';

const Rank = ({ name , entries }) => {
	return(
		<div>
			<div className= 'black b i f3 '>
			{`${name}, Your current entry count is...`}
			</div>
			<div className= 'black b i f2 '>
			{entries}
			</div>
		</div>
	);
}

export default Rank;
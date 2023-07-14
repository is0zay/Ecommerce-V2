import React, { useState, Fragment} from "react";
import {Checkbox, Collapse} from 'antd';

const { Panel } = Collapse;

const categories = [
	{
		"_id": 1,
		"name": "tops"
	},
	{
		"_id": 2,
		"name": "bottoms"
	},
	{
		"_id": 3,
		"name": "accessories"
	}
];



function ProductFilter(props) {

	const [checked, setChecked] = useState([]);


	const handleToggle = (value) => {

		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if(currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		setChecked(newChecked);
		props.handleFilters(newChecked);
	}

	const renderCheckboxLists = () => categories.map((value, index) => (
		<React.Fragment key={index}>
			<Checkbox 
				onChange={()=>handleToggle(value._id)}
				type="checkbox"
				checked={checked.indexOf(value._id) === -1 ? false : true}
			/>
			<span>{value.name}</span>
		</React.Fragment>
	));

	return (
		<>
			<Collapse defaultActiveKey={['0']}>
				<Panel header key="1">
					{renderCheckboxLists()}
				</Panel>
			</Collapse>
		</>
	 );
}

export default ProductFilter;
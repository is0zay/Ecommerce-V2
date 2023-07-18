import React, { useState, Fragment} from "react";
import {Checkbox, Collapse} from 'antd';

const { Panel } = Collapse;

// setting up the array containing the categories
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


// use props to pass info when the component is used elsewhere
function ProductFilter(props) {

	// utilize useState to keep track of the checked categories
	const [checked, setChecked] = useState([]);


	// Funtion logic to handle the checkbox toggle
	const handleToggle = (value) => {

		// Check if the category is already selected
		// add the newley checked category to the checked array
		// If unchecked, remove category from checked array
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if(currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		// Update the state of newCHECKED AND PASS IT THROUGH PROPS
		setChecked(newChecked);
		props.handleFilters(newChecked);
	}

	  // Function to render the list of checkboxes

	  // ITERATE THROUGH EACH CATEGORY AND CREATE A CHECKBOX FOR EACH
	const renderCheckboxLists = () => categories.map((value, index) => (
		<React.Fragment key={index}>
			<Checkbox 
				onChange={()=>handleToggle(value._id)}	// use onchange to trigger the handleToggle function
				type="checkbox"
				checked={checked.indexOf(value._id) === -1 ? false : true} // checkbox's checked prop is set to true if the category id is present in the checked array, and false otherwise.
			/>
			<span>{value.name}</span>	{/* display category name */}
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
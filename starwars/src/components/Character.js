// Libraries
import React from 'react';
import styled from 'styled-components';

// Styles
const PersonBox = styled.div`
	border: 1px solid #333;
	background: transparent;
	color: #336699;
	font-size: 1rem;
	text-align: left;
	width: 100%;
	padding: 20px;

	h3 {
		margin: 0;
		color: #49b7aa;
	}
	ul {
		margin: 0;
		padding: 5px;

		li {
			list-style-type: square;
			list-style-position: inside;
		}
	}
`;

const Character = props => {
	// console.log(props.name);
	return (
		<PersonBox>
			<h3>{props.name}</h3>
			<ul>
				<li>{props.hair_color}</li>
				<li>{props.eye_color}</li>
				<li>{props.skin_color}</li>
				<li>{props.birth_year}</li>
			</ul>
		</PersonBox>
	);
};
export default Character;

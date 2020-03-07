// Libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

//Styles
const PersonContainer = styled.div`
	border: 1px solid #ff0000;
	max-width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const App = props => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [people, setPeople] = useState([]);

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	useEffect(() => {
		axios
			.get('https://swapi.co/api/people/')
			.then(response => {
				setPeople(response.data.results);
			})
			.catch(`These aren't the droids you are looking for.`);
	}, []);

	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
			<div className="wrapper">
				{people.map(person => {
					console.log(person.name);
					return <PersonContainer>{person.name}</PersonContainer>;
				})}
			</div>
		</div>
	);
};

export default App;

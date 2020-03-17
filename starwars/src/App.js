// Libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

// Components
import Character from './components/Character';

//Styles

const PersonContainer = styled.div`
	max-width: 960px;
	margin: 0 auto;
	background-color: rgba(255, 255, 255, 0.6);
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
`;

const App = props => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	const [people, setPeople] = useState([]);
	// const [image, setImage] = useState({});

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

	// useEffect(() => {
	// 	axios
	// 		.get('http://intergalacticdb.me/api/characters?name=&image=')
	// 		.then(res => {
	// 			setImage(res.data);
	// 		})
	// 		.catch(`These aren't the droids you are looking for.`);
	// }, []);

	// console.log(image);

	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
			<div className="wrapper">
				{people.map(person => {
					return (
						<PersonContainer>
							<Character
								name={person.name}
								hair_color={person.hair_color}
								eye_color={person.eye_color}
								skin_color={person.skin_color}
								birth_year={person.birth_year}
							/>
						</PersonContainer>
					);
				})}
			</div>
		</div>
	);
};

export default App;

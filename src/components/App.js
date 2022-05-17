import React, { useState, useEffect } from 'react';
import getResponseFromOpenAI from '../resources';
import PromptForm from './PromptForm';
import Responses from './Responses';


const App = () => {
	const [currentPrompt, setCurrentPrompt] = useState('');
	const [responses, setResponses] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [engine, setEngine] = useState('text-curie-001'); // default text-curie-001 engine

	useEffect(() => {
		const responsesFromLocalStorage = localStorage.getItem('responses');
		if (responsesFromLocalStorage) {
			setResponses([...JSON.parse(responsesFromLocalStorage)]);
		}
	}, []);

	const handleSelect = (evt) => {
		setEngine(evt.target.value);
	}

	const handleChange = (evt) => {
		setCurrentPrompt(evt.target.value);
	}

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const key = process.env.REACT_APP_OPENAI_KEY;
		setIsLoading(true);
		const responseFromOpenAI = await getResponseFromOpenAI(key, engine, currentPrompt);
		const response = {
			prompt: currentPrompt,
			response: responseFromOpenAI
		}
		const updatedResponses = [response, ...responses];
		setIsLoading(false);
		setResponses(updatedResponses);
		localStorage.setItem('responses', JSON.stringify(updatedResponses));
		setCurrentPrompt('');
	}

	return (
		<div className="app">
			<h1>Fun with AI</h1>
			<div className="prompt-form">
				<PromptForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleSelect={handleSelect}
					currentPrompt={currentPrompt}
					isLoading={isLoading}
				/>
			</div>
			<div>
				<div className="response">
					<h2>Responses: </h2>
					{isLoading && <p>Loading...</p>}
				</div>

				{responses.length ? <Responses results={responses} /> : null}
			</div>
		</div>
	);
}

export default App;
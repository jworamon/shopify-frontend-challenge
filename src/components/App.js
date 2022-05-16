import React, { useState } from 'react';
import getResponseFromOpenAI from '../resources';
import PromptForm from './PromptForm';
import Responses from './Responses';


const App = () => {
	const [currentPrompt, setCurrentPrompt] = useState('');
	const [responses, setResponses] = useState([]);

	const handleChange = (evt) => {
		setCurrentPrompt(evt.target.value);
	}

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const key = process.env.REACT_APP_OPENAI_KEY;
		const responseFromOpenAI = await getResponseFromOpenAI(key, 'text-curie-001', currentPrompt);
		const response = {
			prompt: currentPrompt,
			response: responseFromOpenAI
		}
		setResponses([response, ...responses]);
		setCurrentPrompt('');
	}

	return (
		<div className="app">
			<h1>Fun with AI</h1>
			
			<div className="prompt-form">
				<PromptForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					currentPrompt={currentPrompt} 
				/>
			</div>
			<div>
				<h2>Responses: </h2>
				{responses.length ? <Responses results={responses} /> : null}
			</div>
		</div>
	);
}

export default App;
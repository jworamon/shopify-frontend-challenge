import React, { useState } from 'react';
import './App.css';
import getResponseFromOpenAI from '../resources';
import Responses from './Responses';

const App = () => {
	const [currentPrompt, setCurrentPrompt] = useState('');
	const [responses, setResponses] = useState([]);

	// const responsesRef = useRef(responses);
	// const setResponses = (responses) => {
	// 	responsesRef.current = responses;
	// 	_setResponses(responses);
	// }

	const handleChange = (evt) => {
		setCurrentPrompt(evt.target.value);
	}

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const key = process.env.REACT_APP_OPENAI_KEY;
		const responseFromOpenAI = await getResponseFromOpenAI(key, currentPrompt);
		const result = {
			prompt: currentPrompt,
			response: responseFromOpenAI
		}
		setResponses([result, ...responses]);
		setCurrentPrompt('');
	}

	return (
		<div className="App">
			<h1>Fun with AI</h1>
			
			<div>
			<form onSubmit={handleSubmit}>
				<label><b>Enter Prompt:</b></label>
				<br />
				<textarea
					name="currentPrompt"
					value={currentPrompt}
					onChange={handleChange}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
			</div>

			<div>
				<h2>Responses: </h2>
				{
					responses.length ? <Responses results={responses} /> : null
				}
			</div>
		</div>
	);
}

export default App;
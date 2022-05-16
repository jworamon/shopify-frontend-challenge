import React, { useState } from 'react';

const PromptForm = (props) => {
    const { handleChange, handleSubmit, currentPrompt } = props;

    return (
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

    );
}

export default PromptForm;

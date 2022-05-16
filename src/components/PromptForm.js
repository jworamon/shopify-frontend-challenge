import React from 'react';

const PromptForm = (props) => {
    const { handleChange, handleSubmit, currentPrompt } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="currentPrompt"><b>Enter Prompt:</b></label>
            <br />
            <textarea
                name="currentPrompt"
                value={currentPrompt}
                onChange={handleChange}
            />
            <br />
            <div className="submit-button">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default PromptForm;

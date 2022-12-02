import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        // console.log('on change')
        setText(event.target.value);
    }
    const handleUpperClick = () => {
        // console.log('uppercase clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Coverted to Uppercase', 'success')
    }
    const HandleLowerClick = () => {
        // console.log('lowercase clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Coverted to Lowercase', 'success')

    }
    const HandleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text removed', 'success')

    }
    const HandleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copyed to clipboard', 'success')

    }
    const HandleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed', 'success')

    }
    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3 className="my-4">{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={HandleLowerClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={HandleRemoveSpace}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={HandleClearClick}>Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={HandleCopy}>Copy text</button>

            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Text Summary</h3>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes read</p>
                {/* <h3>Preview</h3>
                <p>{text}</p> */}
            </div>
        </>
    )
}

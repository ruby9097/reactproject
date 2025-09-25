import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
}

const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
        props.showAlert("Converted to Lowercase!","success");

}

const handleOnChange=(event)=>{
setText(event.target.value);
}
    const [text,setText]=useState('Enter text here');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}} rows="8" />
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
<h2>Your Text Summery</h2>
<p>{text.split(" ").length} words {text.length} charactors</p>
<p>{0.008 * text.split(" ").length} Minute Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}
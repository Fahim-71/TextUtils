import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked")
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to uppercase', 'success')
  }

  const handleLoClick = ()=>{
    //console.log("Lowercase was clicked")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to lowercase', 'success')
  }

  const handleOnChange = (event)=>{
    //console.log("On change")
    setText(event.target.value)
  }

  const handleCopy = () =>{
    console.log("I am copy")
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges();
    props.showAlert('Copied to Clipboard', 'success')
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert('Extra spaces removed', 'success')
    
  }
    const [text, setText] = useState('Enter text here')
    //setText("new text")
  return (
    <>
    <div className="container">
        <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>{props.heading}</h1>
<div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743', borderColor: props.mode==='dark' ? '#4a6fa5' : '#ced4da'}} id="myBox" rows="8"></textarea>
</div>
  
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}

//Done

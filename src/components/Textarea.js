import React ,{useState}from 'react'

export default function Textarea(props) {
    const handleOnChange=(event)=>{
        setText(event.target.value);
        console.log("Handle");
    }
    const toUpperCase=()=>{
        var new_text=text.toUpperCase();
        setText(new_text);
    }
    const toLowerCase=()=>{
        var new_text=text.toLowerCase();
        setText(new_text);
    }
    const clearText=()=>{
        var new_text="";
        setText(new_text);
    }
    const RemoveSpaces=()=>{
        var new_text=text.replace(/ /g,'');
        setText(new_text);
    }
    const copyText=()=>{
        var copyText =text;
        navigator.clipboard.writeText(copyText);
        props.showAlert("Copied!","success");
    }
    const [text, setText] = useState("");
    return (

   <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
       <h3>Enter text below.</h3>
        <div className="form-group my-4">
        <textarea className="form-control"  style={{ backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} value={text} id="exampleFormControlTextarea1 " rows="7" onChange={handleOnChange}></textarea>
        </div>
        <div className="container d-flex flex-wrap">

        <button className="btn btn-primary mx-2 my-2" onClick={toUpperCase} >To Upper Case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={toLowerCase} >To Lower Case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText} >Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={RemoveSpaces} >Remove White Spaces</button>
        <button className="btn btn-primary mx-2 my-2" onClick={copyText} >Copy Text on Clipboard</button>
        </div>
        <h2 className="my-3">Text Summary : </h2>
        <div className="container">
           <p> Number of Words : {text.split(" ").length-1}</p>
           <p> Number of Characters : {text.length}</p>
        </div>
        <h2 className="my-4">Preview : </h2>
        <div className="container">
            {text}
        </div>
   </div>

    )
}

import React, { useState } from 'react'
import "./App.css";

const App = () => {
  //use state for handling codes for html css js
  const[htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  //for testing
  //console.log("HTML", htmlCode);
  //console.log("CSS", cssCode);
  //console.log("JS", jsCode);

  //code login of compile code
  const handleOutput = (e) => {
    const iframe = document.getElementById("output");
    iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";

    //adding js code
    iframe.contentWindow.eval(jsCode);
  };

  return (
    <div className="mainarea">
      {/* for ide */}
      <div className="left">

        {/* for html */}
        <label>HTML</label>
        <textarea name="html" onChange={(e) => setHtmlCode(e.target.value)}></textarea>

        {/* for css */}
        <label>CSS</label>
        <textarea name="css" onChange={(e) => setCssCode(e.target.value)}></textarea>

        {/* for javascript */}
        <label>JAVASCRIPT</label>
        <textarea name="javascript" onChange={(e) => setJsCode(e.target.value)}></textarea>
      </div>
      {/* for output */}
      <div className="right">
        <button onClick={handleOutput}>Run</button>
        <iframe id="output"></iframe>
      </div>
    </div>
  )
}

export default App
import React, { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("Password...");

  const passwordGenerate = () => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charactersAllowed) {
      str += "~`!@#$%^&*(){}[]?/";
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      newPassword += str.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  const handleChangeLength = (e) => {
    setLength(e.target.value);
  };

  const handleNumber = (e) => {
    setNumberAllowed(!numberAllowed);
  };

  const handleCharacter = (e) => {
    setCharactersAllowed(!charactersAllowed);
  };

  const copyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText = password;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    alert("Copied To Clipboard");
  };

  return (
    <div className="App text-black">
      <div className="section">
        <h1 className="text-4xl text-black font-medium ">Password Generator</h1>
        <div className="input-group mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="input-field"
          />
          <button
            onClick={copyToClipboard}
            className="copy-button"
          >
            Copy
          </button>
        </div>
        <div className="input-group mb-4">
          <input
            type="number"
            placeholder="Length..."
            className="input-field"
            onChange={(e) => setLength(e.target.value)}
          />
          <div className="label-checkbox">
            <label className="ml-2 text-black">Include Numbers:</label>
            <input
              type="checkbox"
              onClick={handleNumber}
              className="checkbox"
            />
          </div>
          <div className="label-checkbox">
            <label className="ml-2 text-black">Include Symbols:</label>
            <input
              type="checkbox"
              onClick={handleCharacter}
              className="checkbox"
            />
          </div>
        </div>
        <button onClick={passwordGenerate} className="generate-button">
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;

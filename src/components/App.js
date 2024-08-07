// src/App.js
import React, { useState } from 'react';

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateRelationship = () => {
    if (!name1 || !name2) {
      setResult("Please Enter valid input");
      return;
    }

    const getRemainingLength = (str1, str2) => {
      let map = {};
      str1.split('').forEach(char => map[char] = (map[char] || 0) + 1);
      str2.split('').forEach(char => map[char] = (map[char] || 0) - 1);
      return Object.values(map).reduce((sum, val) => sum + Math.abs(val), 0);
    };

    const totalLength = getRemainingLength(name1, name2);
    const index = totalLength % 6;
    const relationships = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

    setResult(relationships[index]);
  };

  const clearFields = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div>
      <h1>FLAMES Game</h1>
      <input
        data-testid="input1"
        name="name1"
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        data-testid="input2"
        name="name2"
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Relationship</button>
      <button data-testid="clear" onClick={clearFields}>Clear</button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;

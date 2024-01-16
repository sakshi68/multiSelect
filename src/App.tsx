import React, { useState } from 'react';
import MultiSelectDropdown from './MultiSelect'; 
import './App.css';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'React.js', label: 'React.js' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'AWS', label: 'AWS' },
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'Rust', label: 'Rust' },
  { value: 'python', label: 'python' },
  { value: 'Express', label: 'Express' },
  { value: 'SQL', label: 'SQL' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="heading">
        <h2>Select Skills </h2>
      </div>
      <MultiSelectDropdown options={options} /> {/* Use the MultiSelectDropdown component */}
    </div>
  );
};

export default App;
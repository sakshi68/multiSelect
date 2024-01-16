import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectDropdownProps {
  options: Option[];
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleOptionToggle = (value: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value)
        : [...prevSelected, value]
    );
    setInputValue('');
  };

  const filteredOptions = options.filter(
    (option) =>
      !selectedOptions.includes(option.value) &&
      option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="multi-select-dropdown">
      <div className="selected-options">
        {selectedOptions.map((option, index) => (
          <div key={option} className="selected-option">
            {option}
            <span className="remove-option" onClick={() => handleOptionToggle(option)}>
              x
            </span>
          </div>
        ))}
        <input
          type="text"
          placeholder="Type here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="options-list">
        {filteredOptions.length === 0 ? (
          <div className="placeholder">No options available</div>
        ) : (
          filteredOptions.map((option) => (
            <div
              key={option.value}
              className={`option ${selectedOptions.includes(option.value) ? 'selected' : ''}`}
              onClick={() => handleOptionToggle(option.value)}
            >
              {option.label}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;

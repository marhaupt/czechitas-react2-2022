import React, { useState } from "react";

const TagInput = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();

    if (inputValue.length > 0) {
      onAdd(inputValue);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="input-container" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Tag"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={inputValue === ""}>
        Přidat
      </button>
    </form>
  );
};

export default TagInput;

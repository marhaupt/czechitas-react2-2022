import React, { useState } from "react";
import TagInput from "./TagInput";

const TagCloud = () => {
  const [tags, setTags] = useState([]);

  const handleAdd = (newValue) => {
    const newTag = {
      timestamp: new Date().getTime(),
      label: newValue,
    };
    setTags((prevTags) => [...prevTags, newTag]);
  };

  const handleRemoveFirst = () => {
    setTags((prevTags) => prevTags.slice(1));
  };

  return (
    <div className="cloud-wrapper">
      <header>
        <TagInput onAdd={handleAdd} />
        <button onClick={handleRemoveFirst} disabled={tags.length === 0}>
          Smazat první
        </button>
      </header>

      <div className="tags">
        {tags.map((tag) => (
          <div key={tag.timestamp} className="tag">
            {tag.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagCloud;

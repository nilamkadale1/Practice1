import React, { useState } from "react";

const SpellcheckTextarea = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        spellCheck={text.length > 0} // Enable spellcheck dynamically
        style={{ width: "300px", height: "200px" }}
      />
    </div>
  );
};

export default SpellcheckTextarea;

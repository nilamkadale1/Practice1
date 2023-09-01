import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

function App() {
  const { register, handleSubmit, setValue } = useForm();
  const [editorValue, setEditorValue] = useState("");

  const handleEditorChange = (value) => {
    setValue("textareaInputValue", value); // Update the form field value
    setEditorValue(value);
  };

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="row">
      <div className="row mt-3">
        <div
          className="col-6"
          style={{ marginTop: "10px", marginLeft: "10px" }}
        >
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ReactQuill
                value={editorValue}
                onChange={handleEditorChange}
                placeholder="Translation input"
                modules={{
                  toolbar: false, // Hide toolbar for simplicity
                }}
              />
              <textarea
                style={{ display: "none" }} // Hide the textarea
                {...register("textareaInputValue")}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text, "This is submitted text!");
    if (text.length === 0) {
      setError(true);
      return;
    }
    axios
      .post("/api/posts", {
        symptom_id: props.symptom_id,
        user_id: "1",
        content: text,
      })
      .then(() => {
        
        setText('')
        setError(false);
        props.rerender();
      });
  };

  return (
    <div>
      { error && 
      <div>
        <h2>Please fill the form.</h2>
      </div>
      
      } 
      <form onSubmit={onSubmit}>
        <label>
          Share your story:
          <textarea type="text" name="name" value={text} onChange={onChange} />
        </label>
        <section>
          <button>Submit</button>
        </section>
      </form>

      
    </div>
  );
};

export default Form;

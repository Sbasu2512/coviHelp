import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";

const Form = (props) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [showToReply, setShowToReply] = useState(true);

  useEffect(() => {
    if (!showToReply) {
      props.setShowFormToReply(false);
    }
    return () => {
      setShowToReply(true);
    };
  });

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (props.reply_to) {
      setShowToReply(false);
    }

    if (text.length === 0) {
      setError(true);
      return;
    }
    axios
      .post("/api/posts", {
        symptom_id: props.symptom_id,
        user_id: "1",
        content: text,
        reply_to: props.reply_to,
      })
      .then(() => {
        setText("");
        setError(false);
        props.rerender();
      });
  };

  return (
    <div>
      {error && (
        <div>
          <Alert variant='danger'>
            <h3>Please fill the form</h3>
          </Alert>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <label>
          <textarea type="text" name="name" value={text} onChange={onChange} />
        </label>
        <section>
          <Button type="submit" variant="secondary">
            Share your story
          </Button>
        </section>
      </form>
    </div>
  );
};

export default Form;

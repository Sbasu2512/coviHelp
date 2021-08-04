import React, { useState } from 'react';

 const Form = () =>  {
  return (
    <form>
    <label>
      Share your story:
      <textarea type="text" name="name"/>
    </label>
    <section>
          <button>Submit</button>
        </section>
  </form>
  )

}

export default Form;

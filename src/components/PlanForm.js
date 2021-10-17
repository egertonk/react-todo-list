import React, { useState, useEffect, useRef } from 'react';   //Import react using useState, useEffect, useRef

function PlanForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  //For for new plan or update the previous plan --> Return form
  return (
    <form onSubmit={handleSubmit} className='plan-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update Plan'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='plan-input edit'
          />
          <button onClick={handleSubmit} className='plan-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add Today's Plan"
            value={input}
            onChange={handleChange}
            name='text'
            className='plan-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='plan-button'>
            Add Plan
          </button>
        </>
      )}
    </form>
  );
}

export default PlanForm;
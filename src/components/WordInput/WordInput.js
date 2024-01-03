import React from 'react';

function WordInput({value = "", onChange}) {
  const [input, setInput] = React.useState(value);

  function processUserInput(value) {
    if (value.length > 5 && value.length >= input.length)
      alert("Guess a word of 5 characters")
    else
      setInput(value)
  }

  return(
    <form onSubmit={e => {
      e.preventDefault()
      if (input.length === 5) {
        console.log(input)
        onChange(input)
        setInput("")
      }
      else
        alert("Guess a word of 5 characters")
    }}>
      <label className="guess-input-wrapper" htmlFor="guess-input">
        Enter guess:
      </label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={input}
        onChange={e => processUserInput(e.target.value.toUpperCase())}
      />
    </form>);
}

export default WordInput;

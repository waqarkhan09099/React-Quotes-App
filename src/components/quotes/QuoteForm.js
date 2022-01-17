import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom'
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [entering, setEntering] = useState(false)
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    authorInputRef.current.value=''
    textInputRef.current.value=''
  }

  const submitButtomHanlder=()=>{
    setEntering(false);
  }

  const onFocusHandler = () => {
    setEntering(true);
  }

  return (
    <>
      <Prompt when={entering} message={"Are you sure to leave this page. "}/>
      <Card>
        <form onFocus={onFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef} required></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={submitButtomHanlder} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;

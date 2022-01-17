import classes from './PagesUi.module.css';
import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import Quotesforms from '../components/quotes/QuoteForm';
import useHttp from '../components/Hooks/use-https';
import {addQuotes} from '../components/Lib/api';

const NewQuotes = () => {
  const history=useHistory()

  const {sendRequest,status,data,error}=useHttp(addQuotes)
  console.log(data)
  console.log(error)
  console.log(status)
  useEffect(()=>{
    if(status==="Completed"){
      history.push('/quotes')
      console.log("load Effect!!")
    }
  },[history,status])
  const addQuotesHandler=(data)=>{
    sendRequest(data);
    
  }
  return (
    <>
      <h1>New Quotes Page</h1>
      <Quotesforms isLoading={status==="pending"} onAddQuote={addQuotesHandler} />

      <Link to="/newquotes/comments"></Link>
    </>
  );
};

export default NewQuotes;

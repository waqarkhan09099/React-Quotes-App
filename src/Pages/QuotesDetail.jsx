import Comments from "../components/comments/Comments";
import Highlightes from "../components/quotes/HighlightedQuote";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
// import {getOneQuote} from '../components/Lib/api';
import classes from "./PagesUi.module.css";
// import useHttp from '../components/Hooks/use-https';
// import {useEffect} from 'react';

const Quotes = (props) => {
  const params = useParams();
  // const {quoteId}=params
  const quotes = props.data.find((quotes) => quotes.id === params.quotesId);
  const match=useRouteMatch()
  // const {loadedQuote}=getOneQuote(quoteId)
  // const { sendRequest,status ,error}=useHttp(getOneQuote,true)
  // console.log(loadedQuote)
  //   useEffect(()=>{
  //     sendRequest(quoteId)
  //   },[sendRequest,quoteId])

    // console.log(match)
  if (!quotes) {
    return <p>Quotes not Found</p>;
  }
  return (
    <>
      <h1>Quotes Detail Page</h1>
      <Highlightes text={quotes.text} author={quotes.author} />
      <Route path={match.url}exact>
        <div className={classes.centered}>
          <Link to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default Quotes;

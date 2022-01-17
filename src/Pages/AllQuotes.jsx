import QuotesList from '../components/quotes/QuoteList';
import useHttp from '../components/Hooks/use-https';
import {getAllQuotes} from '../components/Lib/api';
import {useEffect} from 'react';
import NoQuotes from '../components/quotes/NoQuotesFound';
  
  

 const AllQuotes = (props) => {
    const{sendRequest,error,status,data:transformQuotes}=useHttp(getAllQuotes,true);
    useEffect(()=>{
        sendRequest()
    },[sendRequest])

    if(!props.quotes){
        return <NoQuotes/>
    }

    return ( 
        <>
            <h1>All Quotes Page</h1>
            <QuotesList quotes={props.quotes}/>
        </>
     );
}
 
export default AllQuotes;
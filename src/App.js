import { Route, Switch, Redirect } from 'react-router-dom'
import AllQuotes from './Pages/AllQuotes'
import NewQuotes from './Pages/NewQuotes'
import QuotesDetail from './Pages/QuotesDetail'
import Layout from './components/layout/Layout'
import NoQuotes from './components/quotes/NoQuotesFound'


const Dummy_Data = [
  { id: 'q1', author: 'Waqar Khan', text: 'Galib Quotes is heart touching' },
  { id: 'q2', author: 'Farhan Khan', text: 'Never Give in any situation' },
  { id: 'q3', author: 'Faraz Ahmed', text: 'Move on the field to accept all discourages' },
]

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes quotes={Dummy_Data} />
          </Route>
          <Route path="/quotes/:quotesId" >
            <QuotesDetail data={Dummy_Data} />
          </Route>
          <Route path="/newquotes">
            <NewQuotes />
          </Route>
          <Route path='*'>
            <NoQuotes />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;

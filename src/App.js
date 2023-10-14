import { Container } from 'react-bootstrap';
import './App.css';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <Provider store={store}>
    <Container className='text-center'>
      <Main />
    </Container>
    </Provider>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import Todo from './Todo'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello</h1>
        <Todo />
      </div>
    </Provider>
  );
}
export default App
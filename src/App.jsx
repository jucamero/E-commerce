
import './App.css';

import { Provider } from 'react-redux';
import store from './Store/Store';
import Routing from './Router/Route';


function App() {
  return (
    <div>
      <Provider store={store}>
      <Routing/>
      </Provider>
   
    </div>
  );
}

export default App;

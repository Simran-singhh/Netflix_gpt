import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
function App() {
  return (
    <div className="App no-scrollbar">
      <Provider store={appStore}> 
      <Body/>
      </Provider>
    </div>
  );
}

export default App;

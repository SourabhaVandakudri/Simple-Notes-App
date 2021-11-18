import logo from './logo.svg';
import './App.css';

import store from "./store";
import { Provider } from "react-redux";
import CreateNote from './Components/CreateNote'
import NoteList from "./Components/NoteList";
import SearchComponent from "./Components/SearchComponent";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <SearchComponent/> */}
      <CreateNote disabled={false} mainNote={true}/>
      <NoteList />
    </div>
    </Provider>
  );
}

export default App;

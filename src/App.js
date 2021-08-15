

import TaskContextProvider from './components/context/TaskContext';
import Form from './components/Form';
import Header from './components/Header';
import TaskList from './components/TaskList';
function App() {
  return (
    <TaskContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <Form />
            <TaskList />


          </div>
        </div>
      </div>
    </TaskContextProvider>
  );
}

export default App;

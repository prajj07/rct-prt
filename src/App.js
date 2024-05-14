
import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last name: {props.lastName}</h2>
    <h2>age : 21</h2>
    </>
  );
}


const App = () => {
  return (
    <div className="App">
    <Person name = {'prajwal'}/>
    <Person lastName = {'M'}/>
    <Person />
    <Person />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Search from './search/Search';
import List from './list/List';
import { useState } from 'react';

function App() {
  const [state, setState] = useState('negar');

  const handleSearch = (event) => {
    setState(event.target.value) 
  }
  const stories = [
    {
      id: 0, 
      title: "Negar", 
      countLike: "43",
      description: "this is a persone"
    },
    {
      id: 1, 
      title: "miNu", 
      countLike: "345",
      description: "this is a women"
    },
    {
      id: 2, 
      title: "Sara", 
      countLike: "456",
      description: "this is a girl"
    },
  ]

  const filterList = stories.filter((story) =>  
  story.title.toLowerCase().includes(state.toLowerCase())
  )

const obj = {
  name : 'negar', 
  age: 12,
  education: {
    degree: 17
  }
}

const persone = {
  firstName : 'negar', 
  age: 12,
  family: 'karami',
}

const address = {
  name : 'negar', 
  city: 'tehran',
  country: 'iran',
}

const fullObj = {
  ...persone, 
  uniq: '1111111',
  ...address,
}
console.log("fullObj", fullObj)

const {name, age, education : {degree}} =  obj
console.log("hhhhhhhhhhhhhhh", name, degree);

//   rest operator
const {firstName, ...other} =  persone
console.log("other", other);
  return (
    <div className="App">
      <Search search={state} onSearch={handleSearch}/>
      <List data={filterList}/>
    </div>
  );
}

export default App;

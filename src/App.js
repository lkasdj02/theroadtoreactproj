import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const name = "react";

function List() {
  let myList = [
    ...list,
    {
      title: "Other",
      url: "https://other.org/",
      author: "me",
      num_comments: 0,
      points: 5,
      objectID: 2,
    },
  ];
  console.log(list);
  console.log(myList);
  return (
    <ul>
      {myList.map((item) => (
        <li key={item?.objectID}>
          <span>{item?.title}</span>
          <span>{item?.author}</span>
          <span>{item?.points}</span>
          <span>{item?.num_comments}</span>
        </li> // DO NOT USE THE INDEX OF THE MAP FUNCTION FOR THE KEY ATTRIBUTE.
      ))}
    </ul>
  );
}

const Search = () => {
  // do something in between
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={handleChange}></input>
    </div>
  );
};

function App() {
  // let otherList = list.filter((item) => item.objectID !== 1); THESE ARE JUST CURIOSITIES
  // console.log(list);
  // console.log(otherList);
  return (
    <div className="App">
      <h1>My hacker stories</h1>
      <Search />
      <hr />
      <List />
      <List />
    </div>
  );
}

export default App;

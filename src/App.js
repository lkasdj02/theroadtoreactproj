import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const name = "react";

function List(props) {
  console.log("list renders");
  // let myList = [
  //   ...list,
  //   {
  //     title: "Other",
  //     url: "https://other.org/",
  //     author: "me",
  //     num_comments: 0,
  //     points: 5,
  //     objectID: 2,
  //   },
  // ];
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} /> // DO NOT USE THE INDEX OF THE MAP FUNCTION FOR THE KEY ATTRIBUTE.
      ))}
    </ul>
  );
}

const Item = ({ item }) => (
  <ul>
    <li key={item?.objectID}>
      <span>{item?.title}</span> <br />
      <span>{item?.author}</span> <br />
      <span>{item?.points}</span> <br />
      <span>{item?.num_comments}</span>
    </li>
  </ul>
);

const Search = () => {
  // do something in between
  console.log("search renders");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // console.log(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={handleChange}></input>
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const App = () => {
  // let otherList = list.filter((item) => item.objectID !== 1); THESE ARE JUST CURIOSITIES
  // console.log(list);
  // console.log(otherList);
  console.log("app renders");
  const stories = [
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

  return (
    <div className="App">
      <h1>My hacker stories</h1>
      <Search />
      <hr />
      <List list={stories} />
    </div>
  );
};

export default App;

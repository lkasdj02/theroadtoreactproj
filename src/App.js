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

const Search = (props) => {
  // do something in between
  console.log("search renders");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // console.log(event.target.value);
    props.onSearch(event);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    let value = searchTerm;
    props.onclick(event, value);
  };

  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={props.onSearch}></input>
      <button onClick={handleSubmitSearch}> CLICK ME</button>
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

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(searchedStories);

  const handleClick = (event, value) => {
    let searchResult = stories.filter((item) => item.title === value);
    console.log(searchResult);
    if (searchResult.length === 0) {
      console.log("nothing was found");
    } else {
      console.log(searchResult[0].title);
    }
  };

  return (
    <div className="App">
      <h1>My hacker stories</h1>
      <Search onSearch={handleSearch} onclick={handleClick} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

export default App;

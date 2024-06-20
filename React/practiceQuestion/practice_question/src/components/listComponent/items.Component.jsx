import React, { useState } from "react";

const initialStories = [
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

const Itemcomponent = () => {

  const [searchedData, SetData] = useState(initialStories);

  const searchItem = (e) => {
    const newData=initialStories.filter(data=> data.title.toLowerCase().includes(e.target.value));
    SetData(newData)
  };

  return (
    <div>
      <h3>search by Title</h3>
      <br />
      <input type="text" onChange={searchItem} />
      <div>
        {searchedData.map((data) => (
          <div>
            <hr />
            Title:{data.title}
            <br />
            author:{data.author}
            <hr />
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default Itemcomponent;

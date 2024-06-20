import './App.css'
import StoryComponent from './components/listComponent/list.Component'
import Itemcomponent from './components/listComponent/items.Component';

function App() {
  
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






return (
<>
<h1>
  list stories
</h1>
<br/>

<StoryComponent data = {initialStories} />
<br/>
<Itemcomponent  data={initialStories}/>
</>
  )
}

export default App

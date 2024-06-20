import React from "react";

const StoryComponent=({data})=>{
    return(
        <div>
        {data.map(story => (
            <div key={story.objectID} className="story">
                <h2><a href="">{story.title}</a></h2>
                <p>Author: {story.author}</p>
                <p>Comments: {story.num_comments}</p>
                <p>Points: {story.points}</p>
            </div>
        ))}
    </div>


    )

}

export default StoryComponent
import React from 'react'
import Story from '../components/Story'
const Home = ({toggleStory, setToggleStory, toggleCreateStory, setToggleCreateStory}) => {
  return (
    <div>
      <Story toggleStory={toggleStory} setToggleStory={setToggleStory}/>
   </div>
  )
}

export default Home
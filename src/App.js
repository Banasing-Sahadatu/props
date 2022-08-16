import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'

function App() {

  let title="My activities to do for the week"
  return (
    <div>
      <NavBar title={title} />
      <main>
      <Todo title="learning react" datetime="15th August2022"/>
        <Todo title="sleeping allday" datetime="15th august2022" />
        <Todo title="jogging " datetime="15th august2022" />
        <Todo title="cooking" datetime="15th august2022" />
        <Todo title="site-seeing" datetime="15th august2022" />
        
        
      </main>
    </div>
  )
}

export default App

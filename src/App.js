import React from 'react'
import Acceuil from './components/Acceuil';
import { BrowserRouter,Router,Route} from 'react-router-dom'
import Post from './Post';



const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Route path="/post/" component={Acceuil} />
          <Route path="/post/:id" component={Post} />

          
      </BrowserRouter>
    </div>
  )
}

export default App

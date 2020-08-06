import React from 'react'
import { connect } from 'react-redux'
const getDataFromStore = data => {
  return {
    posts: data.posts
  }
}

const Post = (props) => {
 
  console.log(getDataFromStore())
   
      
const listPost = getDataFromStore().map((post,index)=>(
  <div key={post.id}>
  <h2>{post.title} </h2>
  <p>{post.body} </p>
</div>
))

  
    // <p>desolé aucun post</p>
  
  return (
    <div>
      <h1>Je suis dans la page d'accueuil</h1>
      {
        listPost
      }
    </div>
  )
}

export default connect(getDataFromStore)(Post)
/*

getDataFromStore(state,param){

}

*/
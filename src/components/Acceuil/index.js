import React from 'react'
import { connect } from 'react-redux'
const getDataFromStore = data => {
  return {
    posts: data.posts
  }
}

const Acceuil = (props) => {
  console.log(props)
  const listPost = props.posts.length != 0 ? (
    props.posts.map(post => {
      return (
        <div key={post.id}>
          <h2>{post.title} </h2>
          <p>{post.body} </p>
        </div>
      )
    })
  )
  :
  (
    <p>desolé aucun post</p>
  )
  return (
    <div>
      <h1>Je suis dans la page d'accueuil</h1>
      {
        listPost
      }
    </div>
  )
}

export default connect(getDataFromStore)(Acceuil)
/*

getDataFromStore(state,param){

}

*/
const initState={
  posts: [
    {
      id: 1,
      title: 'Mon titre',
      body: 'voici le contenu de l\'article'
    },
    {
      id: 2,
      title: 'Mon titre',
      body: 'voici le contenu de l\'article'
    },
    {
      id: 3,
      title: 'Mon titre',
      body: 'voici le contenu de l\'article'
    },
    {
      id: 4,
      title: 'Mon titre',
      body: 'voici le contenu de l\'article'
    }
  ]
};

const rootReducer = (state= initState,action)=>{
  return state
}

export default rootReducer
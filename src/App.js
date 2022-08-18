import React, {useState, useEffect} from "react"
import Card from "./Components/Card.js"

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() =>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&image_type=photo&page=${page}`)
      .then(res => res.json())
      .then(data => setData(data.hits))
  }, [page])

  const cards = data.map((item) => {
    return <Card 
            source={item.largeImageURL}
            key={item.id}
            />
  })

  function newPage(event){
    event.preventDefault()
    setPage(prevPage =>{
      return prevPage+1
    })
    console.log(page)
  }

  return (
    <div className="container">
      {cards}
      <button onClick={newPage}>Load More</button>
    </div>
  );
}

export default App;

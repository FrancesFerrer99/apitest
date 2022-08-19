import React, {useState, useEffect} from "react"
import Card from "./Components/Card.js"

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(20)
  const [search, setSearch] = useState('')

  useEffect(() =>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&image_type=photo&per_page=${page}&safesearch=true&q=${search}`)
      .then(res => res.json())
      .then(data => setData(data.hits))
  }, [page, search])

  const cards = data.map((item) => {
    return <Card
            key={item.id}
            source={item.webformatURL}
            author={item.user}
            views={item.views}
            downloads={item.downloads}
            />
  })

  function newPage(){
    setPage(prevPage =>{
      return prevPage+12
    })
  }

  function onType(event){
    const {name, value} = event.target;
    setSearch(()=> value)
  }

  return (
    <main>
      <div className="form-container">
        <form className="form">
            <input className="form-input" onChange={onType} name="search" value={search} placeholder="search..."/>
        </form>
      </div>
      <div className="container">
        {cards}
      </div>
      <div className="search-button-container">
        <button onClick={newPage} className="search-button">Load More Images</button>
      </div>
    </main>
  );
}

export default App;

import React, { useState } from 'react'
import { movies } from './data.js'

const Movies = () => {
    const [movieslist, setmovieslist] = useState(movies);
    const filterByCategory = (cat) => {
      setmovieslist(movies.filter((data)=>data.category == cat))
    }


  return (
    <>
        <div className="my-3 mx-auto text-center " style={{width:'1000px',margin:'auto'}}>
<button onClick={()=>setmovieslist(movies)} type="button" className="btn btn-outline-primary mx-3">All</button>
<button onClick={()=>filterByCategory("Action")} type="button" className="btn btn-outline-primary mx-3">Action</button>
<button onClick={()=>filterByCategory("Thriller")} type="button" className="btn btn-outline-light mx-3">Thriller</button>
<button onClick={()=>filterByCategory("Animation")} type="button" className="btn btn-outline-info mx-3">Animation</button>
<button onClick={()=>filterByCategory("Horror")} type="button" className="btn btn-outline-warning mx-3">Horror</button>
<button onClick={()=>filterByCategory("Drama")} type="button" className="btn btn-outline-info mx-3">Drama</button>
<button onClick={()=>filterByCategory("Sci-Fi")} type="button" className="btn btn-outline-light mx-3">Sci-Fi</button>
        </div>
    
    <div style={{display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexWrap:'wrap',
                textAlign:'center',
                width:'1200px',
                margin:'auto',
                color:'white',
                marginTop:'1.5rem'
                }}>
     {movieslist.map((data)=><div key={data.id} style={{maxWidth:'300px'}}>
     <div style={{padding:'10px'}} className='hover_effect'>
        <img src={data.poster_path} alt="" style={{width:'200px',borderRadius:'10px',border:'1px solid yellow',height:'280px'}} />
     </div>
     <h5>{data.title}</h5>
     <p>{data.release_date}</p>
     </div>)}
    </div>
    </>
  )
}

export default Movies

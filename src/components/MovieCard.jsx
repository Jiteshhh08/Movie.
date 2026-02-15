import React from 'react'
import '../css/MovieCard.css'
import { useMovieContext } from '../context/MovieContext'

function MovieCard({movie}) {

    const {addToFav, removeFromFav, isFav} = useMovieContext()
    const fav = isFav(movie.id)

    function onFavClick(e){
        e.preventDefault()
        if(fav) removeFromFav(movie.id)
        else addToFav(movie)
    }
    
  return (
    <div className='movieCard'>
        <div className="moviePoster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movieOverlay">
                <button className={`favBtn`} onClick={onFavClick}>
                      {fav ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
        <div className="movieInfo">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default MovieCard
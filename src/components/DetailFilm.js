import React from 'react';
import './style.css';
import { FaStar } from 'react-icons/fa';
function DetailFilm({ data, err }) {
  return Object.keys(data).length !== 0 ? (
    !data.Response ? (
      <div>{data.Error}</div>
    ) : (
      <div className='search-result  '>
        <div className='info'>
          <img className='poster' src={data.Poster} alt='Poster-film'></img>
          <div>
            <h2>{data.Title}</h2>
            <div className='rating'>
              <div className='icon'>
                <FaStar />
              </div>
              <h4>{data.imdbRating}</h4>
            </div>
            <div className='details'>
              <span>{data.Rated}</span>
              <span>{data.Year}</span>
              <span>{data.Runtime}</span>
            </div>
            <div className='genre'>
              <div>{data.Genre}</div>
            </div>
          </div>
          <h3>Plot:</h3>
          <p>{data.Plot}</p>
          <h3>Cast:</h3>
          <p>{data.Actors}</p>
        </div>
      </div>
    )
  ) : (
    <div></div>
  );
}

export default DetailFilm;

import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import DetailFilm from './DetailFilm';

function SearchBar() {
  const [nameMovie, setName] = useState();
  const [data, setData] = useState({});
  const [err, setErr] = useState();
  const handleOnclick = async () => {
    try {
      console.log(1);
      console.log(nameMovie);
      const res = await axios.get(
        `http://www.omdbapi.com/?t=${nameMovie}&apikey=9d5b240e`
      );
      console.log(res);
      setData(res.data);
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div>
      <div className='search-container'>
        <input
          type='text'
          id='movie-name'
          placeholder='Enter movie name ...'
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button id='search-btn' onClick={handleOnclick}>
          Search
        </button>
      </div>
      <div className='result'>
        <DetailFilm data={data} err={err} />
      </div>
    </div>
  );
}

export default SearchBar;

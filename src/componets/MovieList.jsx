import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalAPI'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([])
  const elementRef = useRef(null);
  useEffect(() => {
    const getMovieByGenreId = () => {
      GlobalApi.getMoviesByGenreId(genreId).then(resp => {
        // console.log(resp.data.results)
        setMovieList(resp.data.results)
      })
    };
    getMovieByGenreId();
  }, [genreId])

  const slideRight = (element) => {
    element.scrollLeft += 500;
  }
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  }
  return (
    <div className='relative'>
      <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)}
        className={`hidden md:flex items-center justify-center text-white text-[34px] absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 rounded-full p-2 backdrop-blur-sm ring-1 ring-white/20 hover:bg-black/60 hover:ring-white/40 transition cursor-pointer`} />

      <div ref={elementRef} className='flex overflow-x-auto gap-4 md:gap-8
     scrollbar-hidden scroll-smooth pt-4 px-3 md:px-4 pb-4'>
        {movieList.map((item) => (
          index_ % 3 === 0
            ? <HrMovieCard key={item.id} movie={item} />
            : <MovieCard key={item.id} movie={item} />
        ))}
      </div>
      <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)}
        className={`hidden md:flex items-center justify-center text-white text-[34px] absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 rounded-full p-2 backdrop-blur-sm ring-1 ring-white/20 hover:bg-black/60 hover:ring-white/40 transition cursor-pointer`} />

      <div className='pointer-events-none hidden md:block absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black/40 to-transparent z-[5]'></div>
      <div className='pointer-events-none hidden md:block absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black/40 to-transparent z-[5]'></div>
    </div>
  )
}

export default MovieList
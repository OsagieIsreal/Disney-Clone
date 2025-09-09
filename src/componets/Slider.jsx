import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalAPI';
import './box.css'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos().then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    }

    const sliderRight = (element) => {
        if (!element) return;
        const width = element.clientWidth;
        element.scrollBy({ left: width, behavior: 'smooth' });
    }
    const sliderLeft = (element) => {
        if (!element) return;
        const width = element.clientWidth;
        element.scrollBy({ left: -width, behavior: 'smooth' });
    }
    return (
        // <div className="relative w-full">
        //     <HiChevronLeft
        //         className="left hidden md:flex cursor-pointer hover:bg-black/70 transition"
        //         onClick={() => sliderLeft(elementRef.current)}
        //     />
        //     <HiChevronRight
        //         className="right hidden md:flex items-center justify-center text-white text-[30px] absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 rounded-full p-2 cursor-pointer hover:bg-black/70 transition"
        //         onClick={() => sliderRight(elementRef.current)}
        //     />
        //     <div
        //         className="flex overflow-x-auto w-full px-4 md:px-16 py-4 scroll-smooth scroll-ml-60 scrollbar-hide space-x-4"
        //         ref={elementRef}
        //     >
        //         {movieList.map(
        //             (item, index) =>
        //                 item.backdrop_path && (
        //                     <img
        //                         key={index}
        //                         src={IMAGE_BASE_URL + item.backdrop_path}
        //                         className="min-w-full md:min-w-[600px] md:h-[310px] object-cover object-left-top rounded-md border-2 border-transparent hover:border-gray-400 transition-all duration-200 ease-in"
        //                         alt={item.title || 'Movie'}
        //                     />
        //                 )
        //         )}
        //     </div>
        // </div>
        <div className='relative'>
            <HiChevronLeft className="hidden md:flex items-center justify-center text-white text-[30px] absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 rounded-full p-2 backdrop-blur-sm ring-1 ring-white/20 hover:bg-black/60 hover:ring-white/40 transition cursor-pointer"
                onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:flex items-center justify-center text-white text-[30px] absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 rounded-full p-2 backdrop-blur-sm ring-1 ring-white/20 hover:bg-black/60 hover:ring-white/40 transition cursor-pointer'
                onClick={() => sliderRight(elementRef.current)} />

            <div className='pointer-events-none hidden md:block absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/40 to-transparent z-[5]'></div>
            <div className='pointer-events-none hidden md:block absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/40 to-transparent z-[5]'></div>


            <div className='flex overflow-x-auto w-full px-0 md:px-0 py-4
    scrollbar-hidden scroll-smooth snap-x snap-mandatory' ref={elementRef}>
                {movieList.map((item, index) => (
                    <img
                        key={item.id || index}
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        className='min-w-full w-full flex-shrink-0 snap-start md:h-[310px] object-cover
                object-left-top rounded-md border-2 border-transparent hover:border-gray-400 transition-all duration-200 ease-in shadow-md hover:shadow-lg'
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider;
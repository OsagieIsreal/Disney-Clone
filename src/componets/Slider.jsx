import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalAPI';
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
        element.scrollLeft += screenWidth - 110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
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
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer "
                onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0'
                onClick={() => sliderRight(elementRef.current)} />


            <div className='flex overflow-x-auto w-full px-16 py-4
    scrollbar-hide scroll-smooth' ref={elementRef}>
                {movieList.map((item, index) => (
                    <img
                        key={item.id || index}
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        className='min-w-full  md:h-[310px] object-cover
                object-left-top mr-5 rounded-md hover:border-[4px]
                border-gray-400 transition-all duration-100 ease-in'
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider;
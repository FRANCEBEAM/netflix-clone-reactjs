import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    console.log(movies)

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden" size={40}/>
            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative group-hover:block' id={'slider'}>
                {movies.map((item, id) => (
                   <Movie key={id} item={item}/>
                ))};
            </div>
            <MdChevronLeft className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
        </div>
    </>
  )
}

export default Row
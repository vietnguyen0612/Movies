import './content.scss';

import {AiOutlineLeft} from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react';





const movies = [
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2021/12/poster-chinh-thuc-cua-shang-chi.jpg?fit=700%2C20000&quality=95&ssl=1',
    
];


function Content() {
    const sliderRef = useRef()
    const movieRef = useRef()

    const [isDrag, setIsDrag] = useState(false)
    const [dragDown, setDragDown] = useState(0)    
    const [dragMovie, setDragMovie] = useState(0)

    
    const handleClickSlider = (wap)=> {
        var screenSize = sliderRef.current.clientWidth
        var constWidth = sliderRef.current.scrollWidth


        if(wap === 'left') {
            if(constWidth - (constWidth - sliderRef.current.scrollLeft) > movieRef.current.scrollWidth*2 ) {
                sliderRef.current.scrollLeft -= movieRef.current.scrollWidth*2
            }else {
                sliderRef.current.scrollLeft = 0
            }
        }
        else {
            if(constWidth - (sliderRef.current.scrollLeft + screenSize) > movieRef.current.scrollWidth*2) {
                sliderRef.current.scrollLeft += movieRef.current.scrollWidth*2
            }else {
                sliderRef.current.scrollLeft = constWidth - screenSize
            }
        }
    }

    useEffect(() => {
        if(isDrag) {
            if(dragDown > dragMovie) {
                // console.log('sang phải')
                handleClickSlider('')
                // sliderRef.current.scrollLeft +=(dragDown - dragMovie)
                
            }
            if(dragDown < dragMovie) {
                handleClickSlider('left')
                // console.log('sang trái')
                // sliderRef.current.scrollLeft -= (dragMovie - dragDown)

            }
        }
    },[isDrag,dragDown,dragMovie])

    
    const handleOnDragStart = (e) => {
        setIsDrag(true);
        setDragDown(e.screenX)
        
    }
    const handleOnDragEnd = (e) => {
        setIsDrag(false)
        
    }
    const handleOnDragEnter = (e) => {
        setDragMovie(e.screenX)
        
    }

    return (  
        <div className="content" draggable={false}>
            <h1>Movies</h1>
            <div 
                className="Movies-content" 
                ref={sliderRef} 
                draggable={true}
                onDragEnter={handleOnDragEnter}
                onDragStart= {handleOnDragStart}
                onDragEnd= {handleOnDragEnd}
            >
                {
                    movies.map((e,index) => (
                        <div key={index} className='movie' ref={movieRef} draggable={false}>
                            <img src={e} alt="" className="movie-img" draggable={false}/>
                            <div className="movie-name">movies name</div>
                        </div>
                    ))
                }
            </div>
            
            <AiOutlineLeft className='arrow left' onClick={()=> handleClickSlider('left')}/>
            <AiOutlineLeft className='arrow right' onClick={()=> handleClickSlider('')}/>

            
        </div>
    );
}

export default Content;
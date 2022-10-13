import './content.scss';

import {AiOutlineLeft} from 'react-icons/ai'





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
    
    return (  
        <div className="content">
            <h1>Movies</h1>
            <div className="Movies-content">
                {
                    movies.map((e,index) => (
                        <div key={index} className='movie'>
                            <img src={e} alt="" className="movie-img"/>
                            <div className="movie-name">movies name</div>
                        </div>
                    ))
                }
            </div>
            
            <AiOutlineLeft className='arrow left'/>
            <AiOutlineLeft className='arrow right'/>

            
        </div>
    );
}

export default Content;
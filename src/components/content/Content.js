const movies = [
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    'https://cdn-www.vinid.net/cb56ecf5-phim-marvel-1.jpg',
    
]


function Content() {
    return (  
        <div className="content">
            <h1>Movies</h1>
            <div>
                {
                    movies.map((e,index) => (
                        <div key={index}>
                            <img src={e} alt="" />
                            <div>movies name</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Content;
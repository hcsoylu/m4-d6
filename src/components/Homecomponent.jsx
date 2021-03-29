import React from "react";

export default class Homecomponent extends React.Component {
  state = {
    Movies: [],
  };

  async componentDidMount() {
    let urls = ["harry%20potter", "pirates+of+the+caribbean", "taken"];

    let requests = urls.map((url) =>
      fetch(`http://www.omdbapi.com/?apikey=c94830bb&s=${url}`)
    );

    Promise.all(requests).then((responses) => {
      console.log(reponses);
      return responses;
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.Movies.Movie1.map((movie) => {
            const { Poster, imdbID } = movie;
            return (
              <div className="col-lg-1 ml-2">
                <div key={imdbID}>
                  <img className="img-fluid" src={Poster} alt={Poster} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

/*<div>
        <h1>movies</h1>

        {movies.map((movie) => {
          const { Poster, Title, imdbID } = movie;
          return (
            <div key={imdbID}>
              <h4>{Title}</h4>
              <img src={Poster} alt={Poster} />
            </div>
          );
        })}
      </div> 


      const url = "http://www.omdbapi.com/?apikey=c94830bb&s=harry%20potter";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(url);
    const moviesBig = await response.json();
    const movies = moviesBig.Search;
    setMovies(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);*/

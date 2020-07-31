import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'

class App extends React.Component {

    state =  {
      isLoading : true,
      movielist : [],
    };

    getMovies = async() => {

      const {
        data : {
          data : { movies }
        },
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

      this.setState({isLoading : false, movielist : movies})
    }

    componentDidMount(){
      this.getMovies();
    }

    render(){
      const { isLoading, movielist } = this.state;

      return (
      <section className="container">
        {isLoading ? (<div className="loader"><span className="loader__text">loading...</span></div> ): 
        (
        <div className="movies">
          {movielist.map((movie) =>{
            return (
              <Movie key={movie.id} 
                title={movie.title} 
                year={movie.year} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres} />
              )
          })}
        </div>
        )}
      </section>);
    }

}

export default App;

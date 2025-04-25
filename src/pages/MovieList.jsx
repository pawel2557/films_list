import { Link } from "react-router-dom";
import { Card } from "../components";
import { useEffect, useState } from "react";
export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=cde1df3cbb5c3fdb4a87c0daf29197e3");
      const data = await response.json();
      setMovies(data.results)
    }
    fetchMovies();
  }, [])

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) =>
            <Card key={movie.id} movie={movie} />
          )}
        </div>
      </section>
    </main>
  )
}

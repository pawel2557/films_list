import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, Search, PageNotFound } from "../pages";

import React from 'react'

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<MovieList apiPath="movie/now_playing" title="Home"/>}/>
                <Route path="/movie/:id" element={<MovieDetail />}/>
                <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>}/>
                <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular"/>}/>
                <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcomming"/>}/>
                <Route path="search" element={<Search apiPath="search/movie"/>}/>
                <Route path="*" element={<PageNotFound title="Page Not Found"/>}/>
            </Routes>
        </>
    )
}

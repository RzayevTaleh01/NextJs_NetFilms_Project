import React from 'react'
//Pagelərin ui tərəfi burada yığılır

import Movies from "@/mocks/movies.json";
import FeaturedMovie from '@/components/featured-movie';
import Categories from '@/components/categories';

function HomeContainer() {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]}/>
            <Categories/>
        </div>
    )
}

export default HomeContainer;
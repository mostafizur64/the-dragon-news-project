import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id}=useParams();
const CategoryNews= useLoaderData()
    return (
        <div>
           {id && <h2> this is category: {CategoryNews.length}</h2> }
            {
                CategoryNews.map(news=><NewsCard key={news.id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;
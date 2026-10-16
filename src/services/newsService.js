import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_KEY

export const getNews = async () => {
    const response = await axios.get('https://newsapi.org/v2/everything', {
        params: { q: 'pets', language: 'en', pageSize: 10, apikey: API_KEY }
    })

    return response.data.articles
        .filter(article => article.urlToImage)
        .slice(0, 4)
        .map(article => ({
            id: article.url,
            title: article.title,
            url: article.url,
            image: article.urlToImage
        }))
}
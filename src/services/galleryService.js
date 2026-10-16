import axios from "axios";

const API_KEY = import.meta.env.VITE_PIXABAY_KEY

export const getGallery = async () => {
    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: API_KEY,
            q: 'nature',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 5
        }
    })

    return response.data.hits.map(hit => ({
        id: String(hit.id),
        image: hit.webformatURL,
        alt: hit.tags
    }))
}
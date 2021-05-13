import {API_KEY, API_URL} from './settings'


export default function getTrendingTerms () {
    
    const url = `${API_URL}/trending/searches?api_key=${API_KEY}`
    
    return fetch(url)
        .then(response => response.json())
        .then(response => {
            const {data} = response
            return data
        })
    }

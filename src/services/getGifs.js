import { useEffect, useState } from 'react'

const apiKey = 'X9HkXQh8IUUUIHmSkE417dPe3XBZG25C'

const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=DRAGON BALL&limit=25&offset=0&rating=g&lang=en`

export default function getGifs ({keyword = 'dragon ball'} = {}) {

    return fetch(apiUrl)
        .then(response => response.json())
        .then(response => {
            const {data} = response
            const gifs = data.map(image => image.images.downsized_medium.url)
            return gifs
        })
    }

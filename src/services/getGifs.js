

const apiKey = 'X9HkXQh8IUUUIHmSkE417dPe3XBZG25C'

const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=DRAGON BALL&limit=25&offset=0&rating=g&lang=en`

export default function getGifs ({keyword}) {

    return fetch(apiUrl)
        .then(response => response.json())
        .then(response => {
            const {data} = response
            const gifs = data.map(image => {
                const {images, title, id} = image
                const {url} = images.downsized_medium
                return { title, id, url}
            })
            return gifs
        })
    }

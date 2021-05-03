import {useState, useEffect} from 'react'
import getGifs from '../../services/getGifs'

export default function Home () {

    const [gifs, setGifs] = useState([])
    const [keyword, setKeyword] = useState('')

    useEffect(function () {
        getGifs({keyword}).then(gifs => setGifs(gifs))
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    const handleChange = (evt) => {
        setKeyword(evt.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input placeholder='Search your gif here...' value={keyword} type='text'  onChange={handleChange} /> <button type='submit'> Enviar </button>
            </form>
        </div>
    )
}
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import getGifs from '../../services/getGifs'
    const POPULAR_GIFS = ['Goku', 'Vegeta', 'Gohan']

export default function Home () {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation('')

    const [gifs, setGifs] = useState([])

    useEffect(function () {
        getGifs( {keyword })
            .then(gifs => {
                setGifs(gifs)
            })
    }, [keyword])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (evt) => {
        setKeyword(evt.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input placeholder='Search your gif here...' value={keyword} type='text'  onChange={handleChange} /> <button type='submit'> Enviar </button>
            </form>
                <h3>Ultima busqueda</h3>
                <ListOfGifs gifs={gifs} />
            <h3> Los gifs mas populares </h3>
            <ul>
                {POPULAR_GIFS.map ((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}> Gifs de {popularGif} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
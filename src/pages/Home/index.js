import { useState } from 'react'
import { useLocation, Link } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import {LazyTrending} from 'components/TrendingSearches/index'

export default function Home () {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation('')

    const {gifs} = useGifs(keyword)

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
            <div>
                <h3>Ultima busqueda</h3>
                <ListOfGifs gifs={gifs} />
            </div>
            <div>
                <LazyTrending />
            </div>
        </div>
    )
}
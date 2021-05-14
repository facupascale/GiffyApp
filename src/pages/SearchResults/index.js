import ListOfGifs from "components/ListOfGifs"
import {useGifs} from 'hooks/useGifs'

export default function SearchResults ({ params }) {

    const {keyword} = params
    const {gifs, setPage} = useGifs({keyword})
    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return <div>
        <ListOfGifs gifs={gifs} />
        <button onClick={handleNextPage}>Get more gifs...</button>
    </div>
}
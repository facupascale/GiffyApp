import ListOfGifs from "components/ListOfGifs"
import useGifs from 'hooks/useGifs'


export default function SearchResults ({ params }) {

    const {keyword} = params
    const gifs = useGifs({keyword})

    return <div>
        <ListOfGifs gifs={gifs} />
    </div>
}
import useGlobalGifs from 'hooks/useGlobalGifs'
import Gif from 'components/Gif'

export default function Detail ({params}) {
    
    const gifs = useGlobalGifs()
    const gif = gifs.find(singelGif => singelGif.id === params.id)


   return <Gif {...gif} />
}
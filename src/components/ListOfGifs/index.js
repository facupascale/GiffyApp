import Gif from 'components/Gif'
import './ListOfGifs.css'

export default function ListOfGifs ({gifs}) {

    return <div className='ListOfGifs'>
        {
            gifs.map(({title, id, url}) => 
                <Gif 
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}
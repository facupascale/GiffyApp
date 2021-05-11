import {Link} from 'wouter'

export default function Gif( {title, id, url}) {
    return <div>
        <Link to={`/gif/${id}`} className='Gif-link' > 
            <h4> {title} </h4>
            <img alt={title} src={url} />
        </Link>
    </div>
}
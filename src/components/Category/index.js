import {Link} from 'wouter'

export default function Category ({name, options}) {

    return (
        <div>
            <h3>{name}</h3>
            <ul>
                {
                    options.map((singleOption) => (
                        <li>
                            <Link to={`/search/${singleOption}`}>{singleOption}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
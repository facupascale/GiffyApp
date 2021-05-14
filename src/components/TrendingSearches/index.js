import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'

    const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export function LazyTrending () {
    const {isNearScreen, fromRef} = useNearScreen({distance: "200px"})
    
    return <div ref={fromRef}>
        <Suspense fallback={'estoy cargando'} >
            {isNearScreen ? <TrendingSearches /> : null}
        </ Suspense >
    </div>

}
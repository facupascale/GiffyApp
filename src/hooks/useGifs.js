import {useEffect, useState} from 'react'
import getGifs from '../services/getGifs'

export default function useGifs ({ keyword } = {keyword: null}) {

 const [gifs, setGifs] = useState([])

 useEffect(function () {
     // recuperamos la ultima keyword usada
     const keywordToUse = keyword || localStorage.getItem('lastKeyword')
     getGifs( {keyword: keywordToUse })
         .then(gifs => {
             setGifs(gifs) 
    // seteamos la ultima keyword usada
             localStorage.setItem('lastKeyword', keyword)
         })
 }, [keyword])

    return gifs

}
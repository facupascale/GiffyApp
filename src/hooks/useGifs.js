import {useContext, useEffect, useState} from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'context/GifsContext'

export default function useGifs ({ keyword } = {keyword: null}) {

 const {gifs, setGifs} = useContext(GifsContext)

 useEffect(function () {
    // recuperamos la ultima keyword usada
     const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
     getGifs( {keyword: keywordToUse })
         .then(gifs => {
             setGifs(gifs) 
    // seteamos la ultima keyword usada
             localStorage.setItem('lastKeyword', keyword)
         })
 }, [keyword, setGifs])

    return gifs

}
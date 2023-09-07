import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const useSearchSuggestion = (searchQuery) => {
    const [suggestions, setSuggestions] = useState([]);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
          if(searchCache[searchQuery]) {
              setSuggestions(searchCache[searchQuery])
          } else {
              getSuggestions()
          }
        }, 200);
  
        return () => {
          clearTimeout(timer);
        }
      },[searchQuery])

    const getSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery] : json[1]
        }))
    }

    return suggestions;
}

export default useSearchSuggestion;
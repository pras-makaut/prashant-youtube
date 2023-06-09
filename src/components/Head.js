import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import searchContext from "../utils/searchContext";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const { showSuggestion, setShowSuggestion } = useContext(searchContext);

  //subscribe to the seach store
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const cacheSuggestion = (result) => {
    dispatch(
      cacheResults({
        [searchQuery]: result,
      })
    );
  };
  useEffect(() => {
    //Api call

    // make an api call after every key press
    // but if the diffrence between two api call is less than 200 ms
    //decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    cacheSuggestion(json[1]);
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="humburser-menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEXz9fQzMzP3+fi2t7YiIiIqKirk5uU/Pz+AgYHn6ej2+PdaWlpwcHAlJSUfHx8ZGBnc3t2UlpXu8O+jpKM2NjbMzMxVVVVOTk4vLi4TExOjM+vzAAABA0lEQVR4nO3bAXKCMBBA0UBrW1BEQRTvf9H2EtudWd67wZ8MhAnZ1gAAAAAAAAAAAAAAAAAAAAAASDD2scbsvrZ9xNpaauM4nD+jnYfMxPEyddGmS2bhcA0P7LrrkFk4/0PhnFnYnqfwwNMzM7Df9ukUa9q3PjXxdv+Jdb+lBsZv+PlbPgAAAFDFGCs7r/XLV6wl+yBqfX3Heq2py9iv8x58ILzPa+YqLo/owL/Ex5JYOLzDA7vunfnfov4a1n8O679LD7AftvrfNAAAAEAN5e+Xlr8jfIB73uXv6teft6g/M1N/7qn+7Fr9+cNWf4YUAAAAAAAAAAAAAAAAAAAAAOCgfgHY3y+u9Hc0OQAAAABJRU5ErkJggg=="
          onClick={() => toogleMenuHandler()}
        />
        <img
          className="h-8 mx-4"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnk9Y1gJNsfef0Q970Qgi87cJuheUycIstjw&usqp=CAU"
        />
      </div>
      <div
        className="col-span-10 px-10"
        onMouseEnter={() => setShowSuggestion(true)}
        onMouseLeave={() => setShowSuggestion(false)}
      >
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full px-5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            // onFocus={() => setShowSuggestion(true)}
            // onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute py-2 px-2 bg-white w-[41rem] rounded-lg shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <Link key={suggestion} to={"related/" + suggestion}>
                  <li className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    🔎︎ {suggestion}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;

//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

import React from "react";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Response from "../response";
import { Link } from 'react-router-dom'
import Search from "../Search";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //LIVE API CALL
  //const { data } = UseGoogleSearch(term);

  const data = Response;

  console.log(data);

  return (
    <div className="SearchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            className="searchPage__logo"
          />
        </Link>
        <div className="searchPage__headerBody">
            <Search hideButtons />
        </div>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;

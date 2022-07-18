import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

function SearchBar({ placeholder }) {
  const [Data, setData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

const onChange=async(event)=>{
  setWordEntered(event.target.value)
  const response=await axios.get(`http://localhost:5000/api/products/search/${event.target.value}`)
  setData(response.data)
  
}
  const clearInput = () => {
    setData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={onChange}
        />
        <div className="searchIcon">
          {Data.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {Data.length !== 0 && (
        <div className="dataResult">
          {Data.slice(0, 15).map((value, key) => {
            return (
              <a  className="dataItem" href={`/product/${value._id}`}>
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
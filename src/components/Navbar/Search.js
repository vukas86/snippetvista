// import searchIcon from "../../assets/icons/search/search-outline.png";
import { useState, useEffect } from "react";

import styles from "./Search.module.css";

function Search() {
  const data = [
    {
      url: "",
      tags: ["react", "blog"],
      title: "How to create a react search bar",
    },
    {
      url: "",
      tags: ["node", "express"],
      title: "How to mock api data in Node",
    },
  ];

  const [state, setstate] = useState({
    query: "",
    filteredData: [],
  });

  const searchHandler = (e) => {
    // setQuery(e.target.value);

    const results = data.filter((item) => {
      if (e.target.value === "") return data;
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setstate({
      query: e.target.value,
      filteredData: results,
    });
  };
  console.log(state.filteredData);
  return (
    <div className={styles.searchContainer}>
      <form>
        <input
          type="search"
          className={styles.searchBox}
          placeholder="Search"
          value={state.query}
          onChange={searchHandler}
        />
        {/* <button onClick={searchEvent} className={styles.searchBtn}>
          <img src={searchIcon} alt="search-icon" />
        </button> */}
      </form>
    </div>
  );
}

export default Search;

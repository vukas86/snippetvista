import { useAppContext } from "../../store/AppContext";

import styles from "./Search.module.css";

function Search() {
  const { dataArray, searchResult, setSearchResult } = useAppContext();

  const searchHandler = (e) => {
    const results = dataArray.filter((item) => {
      if (e.target.value === "") return dataArray;
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchResult({
      query: e.target.value,
      filteredData: results,
    });
  };

  return (
    <div className={styles.searchContainer}>
      <form>
        <input
          type="search"
          className={styles.searchBox}
          placeholder="Search"
          value={searchResult.query}
          onChange={searchHandler}
        />
      </form>
    </div>
  );
}

export default Search;

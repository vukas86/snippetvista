import searchIcon from "../../assets/icons/search/search-outline.png";

import styles from "./Search.module.css";

function Search() {
  const searchEvent = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.searchContainer}>
      <form>
        <input
          type="search"
          className={styles.searchBox}
          placeholder="Search"
        />
        <button onClick={searchEvent} className={styles.searchBtn}>
          <img src={searchIcon} alt="search-icon" />
        </button>
      </form>
    </div>
  );
}

export default Search;

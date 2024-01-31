import { useAppContext } from "../../store/AppContext";

function Main() {
  const { dataArray, searchResult } = useAppContext();
  console.log(dataArray, searchResult.query, searchResult.filteredData.length);
  const data = searchResult.filteredData;

  return (
    <section className="main-section">
      {searchResult.query !== "" && data.length !== 0
        ? data.map((item) => (
            <div key={item.id} className="content-container">
              <div className="main-dots">
                <span className="col-1"></span>
                <span className="col-2"></span>
                <span className="col-3"></span>
              </div>
              <article>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </article>
            </div>
          ))
        : dataArray.map((item) => (
            <div key={item.id} className="content-container">
              <div className="main-dots">
                <span className="col-1"></span>
                <span className="col-2"></span>
                <span className="col-3"></span>
              </div>
              <article>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </article>
            </div>
          ))}
    </section>
  );
}

export default Main;

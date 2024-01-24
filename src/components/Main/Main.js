import { useAppContext } from "../../store/AppContext";

function Main() {
  const { dataArray } = useAppContext();

  // let filteredArray = Array.from(new Set(dataArray));

  return (
    <section className="main-section">
      {dataArray.map((item) => (
        <div key={item.id} className="content-container">
          <div className="main-dots">
            <span className="col-1"></span>
            <span className="col-2"></span>
            <span className="col-3"></span>
          </div>
          <article>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        </div>
      ))}
    </section>
  );
}

export default Main;

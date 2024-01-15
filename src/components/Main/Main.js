import { useState, useEffect } from "react";
import { useAppContext } from "../../store/AppContext";

function Main() {
  const [dataArray, setDataArray] = useState([]);
  const { dataObject } = useAppContext();
  console.log(dataObject);

  useEffect(() => {
    Object.entries(dataObject).forEach(([key, values]) => {
      setDataArray((prevArray) => [...prevArray, ...values]);
    });

    // Update state with filtered values
  }, [dataObject, setDataArray]);

  console.log(dataArray);

  const code = `function findMaxNumber(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
        }
        return max;
      }`;
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
            <code>{item.description}</code>
          </article>
        </div>
      ))}
      {/* <div className="content-container">
        <span className="col-1"></span>
        <span className="col-2"></span>
        <span className="col-3"></span>
        <article>
          <h3>Find the Largest Number in an Array</h3>
          <code>{code}</code>
        </article>
      </div>
      <div className="content-container">
        <span className="col-1"></span>
        <span className="col-2"></span>
        <span className="col-3"></span>
        <article>
          <h3>Find the Largest Number in an Array</h3>
          <code>{code}</code>
        </article>
      </div>
      <div className="content-container">
        <span className="col-1"></span>
        <span className="col-2"></span>
        <span className="col-3"></span>
        <article>
          <h3>Find the Largest Number in an Array</h3>
          <code>{code}</code>
        </article>
      </div>
      <div className="content-container">
        <span className="col-1"></span>
        <span className="col-2"></span>
        <span className="col-3"></span>
        <article>
          <h3>Find the Largest Number in an Array</h3>
          <code>{code}</code>
        </article>
      </div>
      <div className="content-container">
        <span className="col-1"></span>
        <span className="col-2"></span>
        <span className="col-3"></span>
        <article>
          <h3>Find the Largest Number in an Array</h3>
          <code>{code}</code>
        </article>
      </div> */}
    </section>
  );
}

export default Main;

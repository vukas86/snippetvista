import React from "react";

function Main() {
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
    </section>
  );
}

export default Main;

import style from "./SideBar.module.css";
import home from "../../assets/icons/home/home-outline.png";
import object from "../../assets/icons/curly/brackets-curly.png";
import array from "../../assets/icons/square/bx-bracket.png";

function SideBar() {
  return (
    <section className={style.sidecontainer}>
      <div className={style.barlinks}>
        <ul>
          <li>
            <a href="exmple.com">
              <img src={home} alt="home-icon"></img>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="exmple.com">
              <img src={object} alt="object-icon"></img>
              <span>Object</span>
            </a>
          </li>
          <li>
            <a href="exmple.com">
              <img src={array} alt="array-icon"></img>
              <span>Array</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SideBar;

import "./header.scss";
import logo from "../../assets/logo.svg";
import { useState } from "react";
// import { Container } from "../container/Container"

export const Header: React.FC = () => {
  const [isForm, setIsForm] = useState(false);



  if (isForm) {
    return (
      <header className="header">
        <img src={logo} alt="investIQ" className="header__logo" onClick={() => {setIsForm(false)}}/>
      </header>
    );
  } else {
    return (
      <>
        {/* <Container> */}
        <header className="header">
          <img src={logo} alt="investIQ" className="header__logo" onClick={() => {setIsForm(true)}}/>
          <div className="header__user-inetrface">
            <div className="header__profile-part">
              <img src="" alt="" className="header__profile-picture" />
              <p className="header__profile-name">User Name</p>
            </div>
            <a href="#" className="header__log-out">
              Вийти
            </a>
          </div>
        </header>
        {/* </Container> */}
      </>
    );
  }
};

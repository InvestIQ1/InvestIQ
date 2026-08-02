import "./header.scss";
import logo from "../../assets/logo.svg";
import Logout from "../../assets/Log-out.svg"
import { logoutUser } from "../../redux/Auth/authOperation";
import { useAppDispatch } from "../../redux/dispatchHook";
import { userSelector } from "../../redux/Auth/authSelector";
import { useAppSelector } from "../../redux/dispatchHook";
// import { Container } from "../container/Container"

export const Header: React.FC = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const userPicture = user?.photoURL || undefined;
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (document.location.pathname === "/") {
    return (
      <header className="header">
        <img src={logo} alt="investIQ" className="header__logo" />
      </header>
    );
  } else {
       return (
      <>
        {/* <Container> */}
        <header className="header">
          <img src={logo} alt="investIQ" className="header__logo" />
          <div className="header__user-inetrface">
            <div className="header__profile-part">
              <img src={userPicture} alt={user?.displayName || "User"} className="header__profile-picture" />
              <img src={Logout} alt="Logout" className="header__exit"/>
              <p className="header__profile-name">{user?.displayName || "User Name"}</p>
            </div>
            <a href="#" className="header__log-out" onClick={handleLogout}>
              Вийти
            </a>
          </div>
        </header>
        {/* </Container> */}
      </>
    );
  }

};

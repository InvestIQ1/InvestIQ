import "./header.scss";
import Alogo from "../../assets/logo.svg";
import BLogo from "../../assets/WLogo.svg";
import Logout from "../../assets/Log-out.svg";
import { logoutUser } from "../../redux/Auth/authOperation";
import { useAppDispatch } from "../../redux/dispatchHook";
import { userSelector } from "../../redux/Auth/authSelector";
import { useAppSelector } from "../../redux/dispatchHook";
import { Container } from "../container/Container"
import { ThemeToggle } from "../Theme/ThemeToggle";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useState } from "react";
  import { useLocation } from "react-router-dom";

export const Header: React.FC = () => {
    console.log(useLocation().pathname)
  const context = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const userPicture = user?.photoURL || undefined;
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const [imageError, setImageError] = useState(false);

  let logo: string;

  if (context?.theme === "dark") {
    logo = BLogo;
  } else {
    logo = Alogo;
  }

  if (useLocation().pathname === "/") {
    return (
      <div className="header-bg">
                <Container>
      <header className="header">

        <img src={logo} alt="investIQ" className="header__logo" />

      </header>
              </Container>
      </div>
    );
  } else {
    return (
      <>
      <div className="header-bg">
                          <Container>
        <header className="header">

          <img src={logo} alt="investIQ" className="header__logo" />
          <div className="header__user-inetrface">
            <ThemeToggle />
            <div className="header__profile-part">
              {userPicture && !imageError ? (
                <img
                  src={userPicture}
                  alt={user?.displayName || "User"}
                  className="header__profile-picture"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="header__profile-placeholder">
                  {user?.displayName?.[0] || ":)"}
                </div>
              )}
              <p className="header__profile-name">
                {user?.displayName || "User Name"}
              </p>
            </div>
            <a href="#" className="header__log-out" onClick={handleLogout}>
              Вийти
            </a>
            <img
              src={Logout}
              alt="logout"
              className="header__log-out-icon"
              onClick={handleLogout}
            />
          </div>
                  
        </header>
        </Container>
        </div>

      </>
    );
  }
};

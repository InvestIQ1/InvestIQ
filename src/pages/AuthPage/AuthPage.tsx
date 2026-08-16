import { useState, type FormEvent } from "react";
import twoPins from "../../assets/twoPins_desktop.png";
import "./AuthPage.scss";
import {
  createUser,
  loginUser,
  loginWithGoogle,
  loginWithGitHub,
} from "../../redux/Auth/authOperation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../redux/dispatchHook";
import { Header } from "../../components/header/Header";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const [isRegister, setIsRegister] = useState(false);

const handleGitHubLogin = async () => {
  const result = await dispatch(loginWithGitHub());

  if(loginWithGitHub.fulfilled.match(result)){
    toast.success("Вхід через GitHub успішний");
    navigate("/home");
  }else{
    toast.error("Не вдалося увійти через GitHub");
  }
};
const handleGoogleLogin = async () => {
const result = await dispatch(loginWithGoogle());

if(loginWithGoogle.fulfilled.match(result)){
  toast.success("Вхід через Google успішний");
  navigate("/home");
}else{
  toast.error("Не вдалося увійти через Google");
}
};

const handleLogin = async (event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  const formData=new FormData(event.currentTarget);
  const email=formData.get("email");
  const password=formData.get("password");
  if(typeof email!=="string"||typeof password!=="string"){
    return;
  }
  const result= await dispatch(loginUser({email,password}));

  if(loginUser.fulfilled.match(result)){
    toast.success("Вхід успішний");
    navigate("/home");
  }else{
    toast.error("Не вдалося увійти"); 
  }
};

const handleRegister = async (event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();

  const formData=new FormData(event.currentTarget);
  const name=formData.get("name");
  const email=formData.get("email");
  const password=formData.get("password");
  const confirmPassword=formData.get("confirmPassword");

  if(
    typeof name!=="string"||
    typeof email!=="string"||
    typeof password!=="string"||
    typeof confirmPassword!=="string"
  ){
    toast.error("Заповніть всі поля");
    return;
  }

  if(password!==confirmPassword){
    toast.error("Паролі не збігаються");
    return;
  }

  const result=await dispatch(createUser({
    name,
    email,
    password,
  }));

  if(createUser.fulfilled.match(result)){
    toast.success("Акаунт успішно створено");
    navigate("/home");
  }else{
    toast.error("Не вдалося створити акаунт");
  }
};
  return (
    <div className="auth-layout">
      <Header />

      <main className={`auth-page ${isRegister ? "auth-page--register" : ""}`}>
        <div className="auth-page__pattern" />

        <section className="auth-page__branding">
          <div className="auth-page__title-container">
            <h1 className="auth-page__title">InvestIQ</h1>

            <p className="auth-page__subtitle">SMART FINANCE</p>
          </div>
        </section>

        <section className="auth-page__login-panel">
          <form className="auth-form" onSubmit={handleLogin}>
            <h2 className="auth-form__title">Вхід</h2>

            <p className="auth-form__social-text">
              Ви можете авторизуватися за допомогою Google або GitHub
            </p>

            <div className="auth-form__social-buttons">
              <button
                className="auth-form__social-button"
                type="button"
                onClick={() => handleGoogleLogin()}
              >
                <GoogleIcon />
                Google
              </button>
              <button
                className="auth-form__social-button"
                type="button"
                onClick={() => handleGitHubLogin()}
              >
                <GitHubIcon />
                GitHub
              </button>
            </div>

            <div className="auth-form__divider">
              <span>Або увійти через пошту</span>
            </div>

            <label className="auth-form__label" htmlFor="login-email">
              Електронна пошта:
            </label>

            <input
              className="auth-form__input"
              id="login-email"
              type="email"
              placeholder="your@email.com"
              name="email"
              required
            />

            <label className="auth-form__label" htmlFor="login-password">
              Пароль:
            </label>

            <input
              className="auth-form__input"
              id="login-password"
              type="password"
              name="password"
              placeholder="Пароль"
              required
            />

            <div className="auth-form__container-buttons">
              <button className="auth-form__submit" type="submit">
                Увійти
              </button>

              <button
                className="auth-form__secondary"
                type="button"
                onClick={() => setIsRegister(true)}
              >
                Зареєструватися
              </button>
            </div>
          </form>
        </section>

        <section className="auth-page__register-panel">
          <form className="auth-form" onSubmit={handleRegister}>
            <h2 className="auth-form__title">Створити акаунт</h2>

            <p className="auth-form__social-text">
              Зареєструйтесь через Google або GitHub
            </p>

            <div className="auth-form__social-buttons">
              <button
                className="auth-form__social-button"
                type="button"
                onClick={() => handleGoogleLogin()}
              >
                <GoogleIcon />
                Google
              </button>

              <button
                className="auth-form__social-button"
                type="button"
                onClick={() => handleGitHubLogin()}
              >
                <GitHubIcon />
                GitHub
              </button>
            </div>

            <div className="auth-form__divider">
              <span>Або через електронну пошту</span>
            </div>

            <label className="auth-form__label">Ім'я:</label>

            <input
              className="auth-form__input"
              name="name"
              type="text"
              placeholder="Імʼя"
              required
            />

            <label className="auth-form__label">Електронна пошта:</label>

            <input
              className="auth-form__input"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />

            <label className="auth-form__label">Пароль:</label>

            <input
              className="auth-form__input"
              name="password"
              type="password"
              placeholder="Пароль"
              required
            />

            <label className="auth-form__label">Повторіть пароль:</label>

            <input
              className="auth-form__input"
              name="confirmPassword"
              type="password"
              placeholder="Повторіть пароль"
              required
            />

            <div className="auth-form__container-buttons">
              <button className="auth-form__submit" type="submit">
                Зареєструватися
              </button>

              <button
                className="auth-form__secondary"
                type="button"
                onClick={() => setIsRegister(false)}
              >
                Уже маю акаунт
              </button>
            </div>
          </form>
        </section>

        <img className="auth-page__logo-bottom" src={twoPins} alt="" />
      </main>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.6 5.1C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6.2 7l6.2 5.2C39 36.9 44 31 44 24c0-1.3-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#181717">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2.15c-3.2.69-3.88-1.38-3.88-1.38-.52-1.32-1.28-1.67-1.28-1.67-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.19 1.18a11.1 11.1 0 0 1 5.8 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.08 0 4.42-2.7 5.4-5.28 5.68.41.35.78 1.04.78 2.1v3.12c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

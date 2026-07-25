import pins from "../../assets/pins_desktop.png";
import twoPins from "../../assets/twoPins_desktop.png";
import "./AuthPage.scss";

export default function AuthPage() {
    return (
        <div className="auth-page">
            <div className="auth-page__left">
                <img className="auth-page__logo-top" src={pins} alt="InvestIQ" />
                <div className="auth-page__title-container">
                     <h1 className="auth-page__title">InvestIQ</h1>
                    <p className="auth-page__subtitle">SMART FINANCE</p></div>

                <img className="auth-page__logo-bottom" src={twoPins} alt="InvestIQ" />
            </div>
            <div className="auth-page__right">
                <form className="auth-form">
                    <p className="auth-form__social-text">
                        Ви можете авторизуватися за допомогою Google або GitHub
                    </p>
                    <div className="auth-form__social-buttons">
                        <button className="auth-form__social-button" type="button">
                            Google
                        </button>
                        <button className="auth-form__social-button" type="button">
                            GitHub
                        </button>
                    </div>
                    <div className="auth-form__divider">
                        <p className="auth-form__social-text">Або увійти за допомогою ел. пошти та паролю після реєстрації</p>
                    </div>
                    <label className="auth-form__label" htmlFor="email">
                        Електронна пошта
                    </label>
                    <input
                        className="auth-form__input"
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                    />
                    <label className="auth-form__label" htmlFor="password">
                        Пароль
                    </label>
                    <input
                        className="auth-form__input"
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button className="auth-form__submit" type="submit">
                        Увійти
                    </button>
                    <button className="auth-form__register" type="button">
                        Зареєструватися
                    </button>
                </form>
            </div>
        </div>
    );
}

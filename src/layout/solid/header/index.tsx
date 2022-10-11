import { createSignal } from 'solid-js';
import NavLinks from '../../../components/solid/nav-links';
import Logo from '../../../components/solid/logo';
import iconClose from '../../../images/shared/mobile/icon-close.svg';
import iconOpen from '../../../images/shared/mobile/icon-hamburger.svg';
import Modal from '../../../components/solid/modal';
import style from './header.module.scss';

const Header = () => {
  const [showMenu, setShowMenu] = createSignal(false);
  let navEl: HTMLDivElement | undefined;

  const onExit = () => setShowMenu(false);

  return (
    <header class={style.header}>
      <div class={style.header__container}>
        <Logo color="dark" />
        <div class={style.header__btnBox}>
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu())}
            aria-label="toggle nav links"
          >
            {showMenu() ? (
              <img src={iconClose} alt="close menu icon" />
            ) : (
              <img src={iconOpen} alt="open menu icon" />
            )}
          </button>
        </div>
        <div
          class={style.header__navBox}
          {...(showMenu() && {
            style: {
              height: `${(navEl && navEl.offsetHeight) || 235}px`,
            },
          })}
        >
          <div ref={navEl} class={style.header__nav}>
            <NavLinks />
          </div>
        </div>
      </div>
      {showMenu() && <Modal onExit={onExit} />}
    </header>
  );
};

export default Header;

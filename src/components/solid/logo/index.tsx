import logoDark from '../../../images/shared/desktop/logo-dark.png';
import logoLight from '../../../images/shared/desktop/logo-light.png';
import style from './logo.module.scss';

const Logo = (props: { color: 'dark' | 'light' }) => (
  <a href="/" class={style.logo}>
    <img
      src={props.color === 'dark' ? logoDark : logoLight}
      alt="logo"
      class={style.logo__img}
    />
  </a>
);

export default Logo;

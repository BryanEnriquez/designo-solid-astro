import logoDark from '../../../images/shared/desktop/logo-dark.png';
import logoLight from '../../../images/shared/desktop/logo-light.png';
import style from './logo.module.scss';

type Props = {
  color: 'dark' | 'light';
  loading?: 'lazy' | 'eager';
};

const Logo = (props: Props) => (
  <a href="/" class={style.logo}>
    <img
      src={props.color === 'dark' ? logoDark : logoLight}
      alt="logo"
      class={style.logo__img}
      loading={props.loading || 'lazy'}
    />
  </a>
);

export default Logo;

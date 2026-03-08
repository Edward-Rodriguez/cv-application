import LogoIcon from '../assets/logo-nobg-cropped.svg';
import '../styles/Logo.css';

export default function Logo() {
  return (
    <div className='logo-container'>
      <img id='logo' src={LogoIcon} alt='logo' />
    </div>
  );
}

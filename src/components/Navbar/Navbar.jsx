import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../Logo/Logo'
import Searchbar from '../Searchbar/Searchbar'

import styles from './Navbar.module.css';

const Navbar = ({reset, setReset}) => {

  const navigate = useNavigate();

  const handleReset = () => {
    setReset(!reset);
  }

  const createDriver = () => {
    navigate('/newDriver');
  }

  const getBack = () => {
    navigate('/');
  }

  return (
    <div className={styles.navbar}>
      <Logo/>
      <Searchbar/>
      <div className={styles.navbar__buttons}>
      <button 
          className={styles.navbar__btn}
          onClick={ handleReset }
        >Reset</button>
        <button 
          className={styles.navbar__btn}
          onClick={ createDriver }
        >New Driver</button>
        <button 
          className={styles.navbar__btn}
          onClick={ getBack }
        >Get back!</button>
      </div>
    </div>
  )
}

export default Navbar

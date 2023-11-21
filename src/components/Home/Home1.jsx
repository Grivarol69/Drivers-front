import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main1';
import Sidebar from '../Sidebar/Sidebar'
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer'

import { getDrivers, getTeams } from '../../redux/actions'

import styles from './Home.module.css';


const Home = () => {

  const dispatch = useDispatch();

  const drivers = useSelector(state => state.drivers);
  const teams = useSelector(state => state.teams);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];

  for (let i = 1; i < Math.ceil(drivers.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const currentItems = drivers.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (!drivers.length) {
      dispatch(getDrivers());
    }
    if (!teams.length) {
      dispatch(getTeams());
    }
  },[]);

  return (
    <>
      <section className={styles.layout}>
        <div className={`${styles.navbar} ${styles.centered}`}>
          <Navbar/>
        </div>
        <div className={`${styles.main} ${styles.centered}`}>
          <Main
            currentItems={currentItems}
          />
        </div>
        {/* <div className={`${styles.sidebar} ${styles.centered}`}> */}
        <div className={styles.sidebar}>
          <Sidebar/>
        </div>
        <div className={`${styles.pagination} ${styles.centered}`}>
          <Pagination
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pageNumberLimit={pageNumberLimit}
            maxPageNumberLimit={maxPageNumberLimit}
            setMaxPageNumberLimit={setMaxPageNumberLimit}
            minPageNumberLimit={minPageNumberLimit}
            setMinPageNumberLimit={setMinPageNumberLimit}
          />
        </div>
        <div className={`${styles.footer} ${styles.centered}`}>
          <Footer/>
        </div>
      </section>
    </>
  )
}

export default Home

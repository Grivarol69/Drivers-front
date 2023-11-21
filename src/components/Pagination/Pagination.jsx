/* eslint-disable react/prop-types */
import styles from './Pagination.module.css'


const Pagination = ({
  pages,
  setCurrentPage,
  currentPage,
  pageNumberLimit,
  maxPageNumberLimit,
  setMaxPageNumberLimit,
  minPageNumberLimit,
  setMinPageNumberLimit
}) => {

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  }

  
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1)%pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > pageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  return (
    <div className={styles.container}>
      <ul
        className={styles.pageNumbers}
      >
        <li>
          <button
            onClick={handlePrevBtn}
            disabled={currentPage === pages[0] ? true : false}
          >Prev</button>
        </li>

        {renderPageNumbers}

        <li>
          <button
            onClick={handleNextBtn}
            // eslint-disable-next-line react/prop-types
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >Next</button>
        </li>
      </ul>
    </div>
  )
}



export default Pagination

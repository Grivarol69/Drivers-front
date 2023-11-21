import Card from '../Card/Card'
import styles from './Main.module.css'

// eslint-disable-next-line react/prop-types
const Main = ({ currentItems }) => {

  return (
    <section className={styles.main}>
      {
        // eslint-disable-next-line react/prop-types
        currentItems.map((driver) => (
          <Card
            key={driver.id}
            id={driver.id}
            name={driver.name}
            image={driver.image}
            teams={driver.teams}
          />
        ))
      }
    </section>
  )
}

export default Main

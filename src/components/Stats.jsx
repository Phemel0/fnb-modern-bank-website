import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter}
  flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stats) => (
      <div key={stats.id} className=''>
        <h4 className='font-poppins'>{stats.value}</h4>
        <p>{stats.title}</p>
      </div>
    ))}
  </section>
)

export default Stats
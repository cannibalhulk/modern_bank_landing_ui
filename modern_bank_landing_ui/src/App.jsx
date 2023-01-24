import styles from './style'
import {Navbar, Testimonials, Billing, Business, Stats, CardDeal, Clients, CTA, Footer, Hero} from './components/index'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> 
          <Business /> 
          <Billing /> 
          <CardDeal /> 
          <Testimonials /> 
          <Clients /> 
          <CTA /> 
          <Footer /> 
        </div>
      </div>
    </div>
)

export default App
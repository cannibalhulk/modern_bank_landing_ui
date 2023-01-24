import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/>in few steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Vivamus blandit mi et gravida rhoncus. Nam eleifend eleifend nunc. Aenean sed dolor purus. Nulla facilisi. Maecenas sit amet pharetra lectus, ac ornare nulla. Pellentesque molestie condimentum mattis. Quisque eget congue nisl.</p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className=" w-full h-full  " />
    </div>
  </section>
)

export default CardDeal
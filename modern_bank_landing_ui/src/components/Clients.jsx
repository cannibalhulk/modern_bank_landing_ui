import styles from "../style"
import { clients } from "../constants"

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client)=>(
        <div  key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w[192px] min-w-[120px]`}>
          <img src={client.logo} alt="client" className=" sm:w-[192px] w-[100px] object-contain scale-[1] duration-300 hover:scale-[1.134]" />
        </div>
      ))}
    </div>
  </section>
)

export default Clients
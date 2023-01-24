import {apple,bill, google} from '../assets'
import styles,{layout} from '../style'

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5] ' />
      
      <div className='opacity-[0.8] absolute z-[3] left-1/3 top-0 w-[50%] h-[50%] rounded-full white__gradient '/>
      <div className=' opacity-[0.8] absolute z-[0] left-1/4 top-80 w-[50%] h-[50%] rounded-full pink__gradient '/>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>Easily control your  <br className='sm:block hidden'/>billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis sem, pharetra non euismod in, vulputate at risus. Ut auctor congue enim, vitae accumsan orci dignissim at.</p>
      
      <div className="flex-row flex flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer " />
        <img src={google} alt="google_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer " />
      </div>
    </div>
  </section>
)


export default Billing
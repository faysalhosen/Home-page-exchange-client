import { AiFillFacebook } from 'react-icons/ai';
import { CgTwitter } from 'react-icons/cg';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <div>
        <div className="flex justify-around bg-black mt-3 p-5">
        <div className="flex ">
            <img className="h-14 w-14 " src="https://i.imgur.com/5DCw3mi.png" alt="" />
            <p className= " font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-white to-rose-400">HomeService <br />Exchange</p>
        </div>
        <div>
            <p className="text-3xl text-transparent  bg-clip-text bg-gradient-to-r from-amber-900   to-white  font-semibold font-roboto hidden lg:block">Servicing your worries away!!</p>
        </div>
        <div className='flex justify-around gap-3' >
         <AiFillFacebook className="text-3xl text-blue-400  "></AiFillFacebook>
         <CgTwitter className='text-3xl text-white'></CgTwitter>
         <AiOutlineInstagram className='text-3xl text-red-700'></AiOutlineInstagram>
         </div>
      </div>
     
      <footer className="footer p-10  text-base-content ">
      
        <nav>
          <header className="  font-bold text-xl">contact us</header>
          <p className="">Office: JI Cempaka wangi No 55</p>
          <p className="">Jakarta-Indonesia</p>
          <p className="">Email: home@services432.com</p>
          <span className='flex items-center gap-3 mt-3'>
            <FiPhoneCall className=' text-xl'></FiPhoneCall>
          <p className=' text-xl'>8884000-234</p>

          </span>
        
        </nav>
        <nav>
          <header className=" font-bold text-xl">Services</header>
          <a className="link link-hover">Interior Design</a>
          <a className="link link-hover">Electronic</a>
          <a className="link link-hover">cleaning</a>
          <a className="link link-hover">plumbing</a>
          
        </nav>
        <nav>
          <header className="font-bold text-xl">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <p className="link link-hover mt-3">Ⓒ 2023 All rights reserved.<br/> is Your Company</p>
        </nav>
        <form>
          <header className="font-bold text-xl">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative ">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered border border-black w-full pr-16"
              />
              <button className="btn border border-black bg-black text-white absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;

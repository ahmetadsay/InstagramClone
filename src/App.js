import { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillFacebook } from 'react-icons/ai'

function App() {
  const ref = useRef();

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const [passwordShown, setPasswordShown] = useState(false)

  const enable = userName && password

  useEffect(() => {
    let turnImage = ref.current.querySelectorAll("img");
    let total = turnImage.length;
    let current = 0;
    const imageSlider = () => {
      if (current > 0) {
        turnImage[current - 1].classList.add("opacity-0");
      } else {
        turnImage[total - 1].classList.add("opacity-0");
      }
      turnImage[current].classList.remove("opacity-0");

      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    let interval = setInterval(imageSlider, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  useEffect(() => {
    if (passwordShown) {

    }
  })
  return (
    <>
      <div className="h-full w-full flex flex-wrap overflow-auto items-center justify-center gap-x-8">
        <div className=" hidden md:block relative w-[380px] h-[581px] bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
          <div className="w-[255px] h-[542px] absolute top-7 right-4" ref={ref}>
            <img
              className=" absolute top-0 left-0 opacity-0 transition-opacity  w-full h-full duration-700 ease-linear  "
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
              alt=""
            />
            <img
              className=" transition-opacity  absolute top-0 left-0 opacity-0 w-full h-full duration-700 ease-linear "
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
              alt=""
            />
            <img
              className=" transition-opacity  absolute top-0 left-0 opacity-0 w-full h-full duration-700 ease-linear"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
              alt=""
            />
            <img
              className=" transition-opacity  absolute top-0 left-0 opacity-0 w-full h-full duration-700 ease-linear"
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[350px] grid gap-y-3">
        <div className=" bg-white border p-[40px] pb-2 ">
          <a href="#" className=" flex justify-center mb-8">
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt=""></img>
          </a>
          <form className=" grid gap-y-1">
            <label className="block relative">
              <input type='text'  value={userName} onChange={e => setUserName(e.target.value)} required={true} className="bg-[#fafafa] w-full h-[38px] border rounded-sm outline-none peer pl-2 " />
              <small className="absolute  cursor-text pointer-events-none top-1/2 left-2 text-xs text-gray-500 -translate-y-1/2 peer-valid:top-[10px] transition-all">Phone number, username or e-mail</small>     
            </label>
            <label className="block relative">
              <div className="relative">
              <input type={passwordShown ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required={true} className="bg-[#fafafa] w-full h-[38px] border rounded-sm outline-none peer pl-2 " />
              <small className="absolute  cursor-text pointer-events-none top-1/2 left-2 text-xs text-gray-500 -translate-y-1/2 peer-valid:top-[10px] transition-all">Password</small> 
              { password ?
              <button  onClick={() => setPasswordShown(!passwordShown)} > show</button> : <button></button>
              }   
              </div>
            </label>
            <button type="submit" disabled={!enable}   className="h-[38px] bg-[#0095f6] rounded text-white disabled:opacity-50 font-medium  "> Log In</button>
            <div className="flex items-center">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="px-4 text-[13px] text-gray-500 font-semibold">OR</span>
            <div className="h-px bg-gray-300 flex-1"></div>
            </div>
              <a href="www.facebook.com">
            <div className="flex items-center gap-6 justify-center text-[rgb(0,55,107)] font-semibold">
              <AiFillFacebook size={16} />

              Log in with Facebook

            </div>
            </a>
            <a href="#" className="text-xs flex items-center justify-center text-link">Forgot Password ?</a>

            
          </form>
        </div>
        <div className="bg-white border p-4 text-sm text-center"> 
        Don't have an account?  <a href="#" className="text-[rgb(0,55,107)] font-semibold">Sign Up</a>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;

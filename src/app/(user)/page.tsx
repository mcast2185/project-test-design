import About from "@/pages/about";
import Home from "@/pages/home";

export default function index() {

  return (
    <div className='h-[100vh] w-[100vw] flex flex-col'>
      <Home/>
      <About/>
    </div>
  )
}
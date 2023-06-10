import Background from "./component/Background";
import Header from "./component/Header";
import practice from "./component/practice";
import Icons from "./component/Icons";
import About from "./component/About";
import {Skills} from "./component/Skills";
import Contact from "./component/Contact";
// import Portfolio from "./component/Portfolio";


export default function Home() {
  return (
    <>
    
    <Header />
    <Background />
    <Icons />
    <About />
    {/* <Portfolio /> */}
    <Skills />
    <Contact />
    </>
  );
}
import './App.css';
import * as index from './index.js'
import {useEffect} from 'react';
import { animated, useSpring } from '@react-spring/web'

function App() {
  return (
    <div className="App">
      <header>
        <h3>SOGI AI</h3>
          <form onSubmit={index.begin}>
            <input type="text" id="username" autoComplete='off' maxLength="20" placeholder="Enter a nickname" />
            <button type="submit">Start</button>
          </form>
          <div className="info" id="info">
            <span className="closebtn" onClick={() => document.getElementById("info").style.display='none'}>&times;</span>
           <p>SOGI AI will never store <u>any</u> information it is given. Your nickname and answers will be immediately erased if you close the page, refresh the page, or press "Return Home" button on any page.</p>
          </div>
          <button className="data-button" onClick={() => document.getElementById("info").style.display="block"}>Is my data stored?</button>
          <br />
          <br />
          <div style={{textAlign:"center"}}>
            <button className="learn-button" onClick={() => index.learn("User", {}, 0, -1)}>Learn about sexualities</button>
            <button className="learn-button" onClick={() => index.learn("User", {}, 1, -1)}>Learn about gender identities</button>
          </div>
      </header>
    </div>
  );
}

function Intro(props) {
  const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <animated.div className="Intro" style={animateStyle}>
      <header>
        <h3>Welcome to <u>SOGI AI</u>, {props.user}</h3>
        <p>
          You deserve to be accepted and feel appreciated no matter your sexual orientation nor gender identity.
          This simple page has been made to help you gain confidence and stop feelings of anxiety or confusion about your sexuality or gender identity.<br /><br />
          Nobody but you will see your nickname, answers, or results. You can choose to exit the page or clear your answers at any time.
        </p>
        <button className="intro-button" onClick={() => index.questions(props.user, 0, props.info)}>Begin Form</button>
        <button className="intro-button" onClick={index.home}>Return Home</button>
      </header>
    </animated.div>
  );
}

function Footer() {
  return (
    <p style={{width: "400px", position: "fixed", bottom:"0", textAlign: "center", left: "50%", marginLeft: "-200px"}}>Created by Bob Brown</p>
  );
}

export default App;
export {Intro, Footer};

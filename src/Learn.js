import './App.css';
import * as index from './index.js'
import { animated, useSpring } from '@react-spring/web'
import {useEffect} from 'react';

function LearnSexualities(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    return (
      <animated.div className="Learn" style={animateStyle}>
        <header>
          <h3>Learn About Sexualities</h3>
        </header>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <button className="intro-button" onClick={() => index.previous(props.user, props.previous, props.info)}>Previous Page</button>
        <button className="intro-button" onClick={index.home}>Return Home</button>
      </animated.div>
    )
}

function LearnGender(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    return (
      <animated.div className="Learn" style={animateStyle}>
        <header>
          <h3>Learn About Gender Identities</h3>
        </header>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <button className="intro-button" onClick={() => index.previous(props.user, props.previous, props.info)}>Previous Page</button>
        <button className="intro-button" onClick={index.home}>Return Home</button>
      </animated.div>
    )
}

export default LearnSexualities;
export {LearnGender};
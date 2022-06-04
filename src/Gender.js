import './App.css';
import * as index from './index.js'
import { animated, useSpring } from '@react-spring/web'
import {useEffect} from 'react';

function Gender(props) {
    const pageNum = props.page;

    if (pageNum === 1) {
        return <Gender1 user={props.user} info={props.info} />
    } else if (pageNum === 2) {
        return <Gender2 user={props.user} info={props.info} />
    } else if (pageNum === 3) {
        return <Gender3 user={props.user} info={props.info} />
    } else if (pageNum === 4) {
        return <Gender4 user={props.user} info={props.info}/>
    } else if (pageNum === 5) {
        return <Gender5 user={props.user} info={props.info}/>
    } else if (pageNum === 6) {
        return <Gender6 user={props.user} info={props.info} />
    } else if (pageNum === 7) {
        return <Gender7 user={props.user} info={props.info} />
    } else if (pageNum === 8) {
        return <Gender8 user={props.user} info={props.info} />
    }  else if (pageNum === 9) {
        return <Gender9 user={props.user} info={props.info} />
    } else if (pageNum === 10) {
        return <Gender10 user={props.user} info={props.info} />
    } else if (pageNum === 11) {
        return <Gender11 user={props.user} info={props.info} />
    } else if (pageNum === 12) {
        return <Gender12 user={props.user} info={props.info} />
    } 
}

function Gender1(props) {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>Please select a pathway, {props.user}.</h3>
                <button onClick={() => { props.info['pathway'] = 0; index.questions(props.user, 2, props.info, );}} className="path-button" id="sexuality-pathway">Sexual Orientation</button>
                <button onClick={() => { props.info['pathway'] = 1; index.questions(props.user, 3, props.info);}} className="path-button" id="gender-pathway">Gender Identity</button>
            </header>
        </animated.div>
    )
}

function Gender2(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>{props.user} - Sexuality Pathway</h3>
                <div className="progress">---------- Page 1/15 ----------</div>
                <p>
                    Welcome to your pathway, {props.user}. Please take your time answering the questions you'll be given.<br/>
                    Nobody is here to judge you. If you feel uncomfortable answering any of the questions, you can continue to the next question
                    using the 'Skip' button.<br /><br />If most of the questions cause you discomfort or you aren't ready to complete the form, you can refresh
                    the page at anytime and your answers will be permanently erased. You can view your progress on any page near the top.
                </p>
                <button className="intro-button" onClick={() => index.questions(props.user, 4, props.info)}>I'm Ready</button>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => index.previous(props.user, 1, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Gender3(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>{props.user} - Gender Identity</h3>
                <button className="intro-button" onClick={() => index.previous(props.user, 1, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Gender4(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>Let's Begin</h3>
                <div className="progress">---------- Page 2/10 ----------</div>
                <p>On a scale of one to five - one being rarely and five being very often - how often do you think about or question your sexuality?</p>
                <div className="button-group">
                    <button onClick={() => {props.info['Gender4'] = 1; index.questions(props.user, 5, props.info);}}>1</button>
                    <button onClick={() => {props.info['Gender4'] = 2; index.questions(props.user, 5, props.info);}}>2</button>
                    <button onClick={() => {props.info['Gender4'] = 3; index.questions(props.user, 5, props.info);}}>3</button>
                    <button onClick={() => {props.info['Gender4'] = 4; index.questions(props.user, 5, props.info);}}>4</button>
                    <button onClick={() => {props.info['Gender4'] = 5; index.questions(props.user, 5, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Gender4'] = "Skip"; index.questions(props.user, 5, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 2, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Gender5(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>Building Confidence</h3>
                <div className="progress">---------- Page 3/10 ----------</div>
                <p>On a scale of one to five - one being very unsure and five being very confident - how confident are you about your sexuality?</p>
                <div className="button-group">
                    <button onClick={() => {props.info['Gender5'] = 1; index.questions(props.user, 6, props.info);}}>1</button>
                    <button onClick={() => {props.info['Gender5'] = 2; index.questions(props.user, 6, props.info);}}>2</button>              
                    <button onClick={() => {props.info['Gender5'] = 3; index.questions(props.user, 6, props.info);}}>3</button>
                    <button onClick={() => {props.info['Gender5'] = 4; index.questions(props.user, 6, props.info);}}>4</button>
                    <button onClick={() => {props.info['Gender5'] = 5; index.questions(props.user, 6, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Gender5'] = "Skip"; index.questions(props.user, 6, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 4, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Gender6(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>Sharing Your Identity</h3>
                <div className="progress">---------- Page 4/10 ----------</div>
                <p>On a scale of one to five - one being very secretive and five being very open - how open are you about your sexuality?</p>
                <div className="button-group">
                    <button onClick={() => {props.info['Gender6'] = 1; index.questions(props.user, 7, props.info);}}>1</button>
                    <button onClick={() => {props.info['Gender6'] = 2; index.questions(props.user, 7, props.info);}}>2</button>
                    <button onClick={() => {props.info['Gender6'] = 3; index.questions(props.user, 7, props.info);}}>3</button>
                    <button onClick={() => {props.info['Gender6'] = 4; index.questions(props.user, 7, props.info);}}>4</button>
                    <button onClick={() => {props.info['Gender6'] = 5; index.questions(props.user, 7, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Gender6'] = "Skip"; index.questions(props.user, 7, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 5, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Gender7(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>Unhelpful Assumptions</h3>
                <div className="progress">---------- Page 5/10 ----------</div>
                <p>How do you feel when people assume your sexuality?</p>
                <div className="option-group">
                    <button onClick={() => {props.info['Gender7'] = 1; index.questions(props.user, 8, props.info);}}>Angry</button>
                    <button onClick={() => {props.info['Gender7'] = 2; index.questions(props.user, 8, props.info);}}>Annoyed</button>
                    <button onClick={() => {props.info['Gender7'] = 3; index.questions(props.user, 8, props.info);}}>Neutral</button>
                    <button onClick={() => {props.info['Gender7'] = 4; index.questions(props.user, 8, props.info);}}>Happy</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Gender7'] = "Skip"; index.questions(props.user, 8, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 6, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Gender8(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>Community Support</h3>
                <div className="progress">---------- Page 6/10 ----------</div>
                <p>Do you consider yourself part of the LGBTQ+ community?</p>
                <div className="option-group">
                    <button onClick={() => {props.info['Gender8'] = 1; index.questions(props.user, 9, props.info);}}>Yes</button>
                    <button onClick={() => {props.info['Gender8'] = 2; index.questions(props.user, 9, props.info);}}>Sometimes</button>
                    <button onClick={() => {props.info['Gender8'] = 3; index.questions(props.user, 9, props.info);}}>No</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Gender8'] = "Skip"; index.questions(props.user, 9, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 7, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Gender9(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>It Takes Time</h3>
                <div className="progress">---------- Page 7/10 ----------</div>
                <p>On a scale of one to five -  one being very uncomfortable and five being very comfortable - how comfortable are you with the idea that you are/may be in the LGBTQ+ community? </p>
                <div className="button-group">
                    <button onClick={() => {props.info['Gender9'] = 1; index.questions(props.user, 10, props.info);}}>1</button>
                    <button onClick={() => {props.info['Gender9'] = 2; index.questions(props.user, 10, props.info);}}>2</button>
                    <button onClick={() => {props.info['Gender9'] = 3; index.questions(props.user, 10, props.info);}}>3</button>
                    <button onClick={() => {props.info['Gender9'] = 4; index.questions(props.user, 10, props.info);}}>4</button>
                    <button onClick={() => {props.info['Gender9'] = 5; index.questions(props.user, 10, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Gender9'] = "Skip"; index.questions(props.user, 10, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 8, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Gender10(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>SOGI Knowledge</h3>
                <div className="progress">---------- Page 8/10 ----------</div>
                <p>On a scale of one to five -  one being very uneducated and five being very knowledgeable - how educated are you on less common sexualities?</p>
                <p style={{fontSize: "20px"}}>e.g. pansexual, asexual, omnisexual, etc.</p>
                <div className="button-group">
                    <button onClick={() => {props.info['Gender10'] = 1; index.questions(props.user, 11, props.info);}}>1</button>
                    <button onClick={() => {props.info['Gender10'] = 2; index.questions(props.user, 11, props.info);}}>2</button>
                    <button onClick={() => {props.info['Gender10'] = 3; index.questions(props.user, 11, props.info);}}>3</button>
                    <button onClick={() => {props.info['Gender10'] = 4; index.questions(props.user, 11, props.info);}}>4</button>
                    <button onClick={() => {props.info['Gender10'] = 5; index.questions(props.user, 11, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Gender10'] = "Skip"; index.questions(props.user, 11, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 9, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}  

function enableButtons() {
    document.getElementById("quiz-header").style.display = "block";
    document.getElementById("quiz-number").style.display = "block";
}

function disableButtons() {
    document.getElementById("quiz-header").style.display = "none";
    document.getElementById("quiz-number").style.display = "none";
}


function Gender11(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>Online Help</h3>
                <div className="progress">---------- Page 9/10 ----------</div>
                <p>Have you taken sexuality quizzes online?</p>
                <div className="option-group">
                    <button onClick={enableButtons}>Yes</button>
                    <button onClick={() => {props.info['Gender11'] = 2; disableButtons(); index.questions(props.user, 12, props.info);}}>No</button>
                </div>
                <p id="quiz-header">How many?</p>
                <div className="option-group" id="quiz-number">
                    <button className="quiz-option" onClick={() => {props.info['Gender11'] = 3; disableButtons(); index.questions(props.user, 12, props.info);}}>1 -3</button>
                    <button className="quiz-option" onClick={() => {props.info['Gender11'] = 4; disableButtons(); index.questions(props.user, 12, props.info);}}>4 - 9</button>
                    <button className="quiz-option" onClick={() => {props.info['Gender11'] = 5; disableButtons(); index.questions(props.user, 12, props.info);}}>10+</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Gender10'] = "Skip"; index.questions(props.user, 12, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 10, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Gender12(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>Awkward Conversations</h3>
                <div className="progress">---------- Page 10/10 ----------</div>
                <p>If a friend (that isn't too close) asks you what your sexuality is, how do you respond?</p>
                <div className="option-group">
                    <button onClick={() => {props.info['Gender12'] = 1; index.questions(props.user, 13, props.info);}}>I tell them my sexuality</button>
                    <button onClick={() => {props.info['Gender12'] = 2; index.questions(props.user, 13, props.info);}}>I tell them I don't know</button>
                    <button onClick={() => {props.info['Gender12'] = 3; index.questions(props.user, 13, props.info);}}>I ignore them</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Gender12'] = "Skip"; index.questions(props.user, 13, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 11, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
} 

function Result(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Result" style={animateStyle}>
            <header>
                {props.results}
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => index.previous(props.user, 11, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}


export default Gender;
export {Result};
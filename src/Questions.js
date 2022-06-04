import './App.css';
import * as index from './index.js'
import { animated, useSpring } from '@react-spring/web'
import {useEffect} from 'react';

function Questions(props) {
    const pageNum = props.page;

    if (pageNum === 1) {
        return <Question1 user={props.user} info={props.info} />
    } else if (pageNum === 2) {
        return <Question2 user={props.user} info={props.info} />
    } else if (pageNum === 3) {
        return <Question3 user={props.user} info={props.info} />
    } else if (pageNum === 4) {
        return <Question4 user={props.user} info={props.info}/>
    } else if (pageNum === 5) {
        return <Question5 user={props.user} info={props.info}/>
    } else if (pageNum === 6) {
        return <Question6 user={props.user} info={props.info} />
    } else if (pageNum === 7) {
        return <Question7 user={props.user} info={props.info} />
    } else if (pageNum === 8) {
        return <Question8 user={props.user} info={props.info} />
    } else if (pageNum === 9) {
        return <Question9 user={props.user} info={props.info} />
    } else if (pageNum === 10) {
        return <Question10 user={props.user} info={props.info} />
    } else if (pageNum === 11) {
        return <Question11 user={props.user} info={props.info} />
    } else if (pageNum === 12) {
        return <Question12 user={props.user} info={props.info} />
    } else if (pageNum === 14) {
        return <Question14 user={props.user} info={props.info} />
    } else if (pageNum === 15) {
        return <Question15 user={props.user} info={props.info} />
    } else if (pageNum === 16) {
        return <Question16 user={props.user} info={props.info} />
    } else if (pageNum === 17) {
        return <Question17 user={props.user} info={props.info} />
    } else if (pageNum === 18) {
        return <Question18 user={props.user} info={props.info} />
    } else if (pageNum === 19) {
        return <Question19 user={props.user} info={props.info} />
    } else if (pageNum === 20) {
        return <Question20 user={props.user} info={props.info} />
    } else if (pageNum === 21) {
        return <Question21 user={props.user} info={props.info} />
    } else if (pageNum === 22) {
        return <Question22 user={props.user} info={props.info} />
    } 
}

function Question1(props) {
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

function Question2(props) {
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

function Question3(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>{props.user} - Gender Pathway</h3>
                <div className="progress">---------- Page 1/15 ----------</div>
                <p>
                    Welcome to your pathway, {props.user}. Please take your time answering the questions you'll be given.<br/>
                    Nobody is here to judge you. If you feel uncomfortable answering any of the questions, you can continue to the next question
                    using the 'Skip' button.<br /><br />If most of the questions cause you discomfort or you aren't ready to complete the form, you can refresh
                    the page at anytime and your answers will be permanently erased. You can view your progress on any page near the top.
                </p>
                <button className="intro-button" onClick={() => index.questions(props.user, 14, props.info)}>I'm Ready</button>
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

function Question4(props) {
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
                    <button onClick={() => {props.info['Question4'] = 1; index.questions(props.user, 5, props.info);}}>1</button>
                    <button onClick={() => {props.info['Question4'] = 2; index.questions(props.user, 5, props.info);}}>2</button>
                    <button onClick={() => {props.info['Question4'] = 3; index.questions(props.user, 5, props.info);}}>3</button>
                    <button onClick={() => {props.info['Question4'] = 4; index.questions(props.user, 5, props.info);}}>4</button>
                    <button onClick={() => {props.info['Question4'] = 5; index.questions(props.user, 5, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question4'] = "Skip"; index.questions(props.user, 5, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 2, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question5(props) {
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
                    <button onClick={() => {props.info['Question5'] = 1; index.questions(props.user, 6, props.info);}}>1</button>
                    <button onClick={() => {props.info['Question5'] = 2; index.questions(props.user, 6, props.info);}}>2</button>              
                    <button onClick={() => {props.info['Question5'] = 3; index.questions(props.user, 6, props.info);}}>3</button>
                    <button onClick={() => {props.info['Question5'] = 4; index.questions(props.user, 6, props.info);}}>4</button>
                    <button onClick={() => {props.info['Question5'] = 5; index.questions(props.user, 6, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question5'] = "Skip"; index.questions(props.user, 6, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 4, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question6(props) {
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
                    <button onClick={() => {props.info['Question6'] = 1; index.questions(props.user, 7, props.info);}}>1</button>
                    <button onClick={() => {props.info['Question6'] = 2; index.questions(props.user, 7, props.info);}}>2</button>
                    <button onClick={() => {props.info['Question6'] = 3; index.questions(props.user, 7, props.info);}}>3</button>
                    <button onClick={() => {props.info['Question6'] = 4; index.questions(props.user, 7, props.info);}}>4</button>
                    <button onClick={() => {props.info['Question6'] = 5; index.questions(props.user, 7, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question6'] = "Skip"; index.questions(props.user, 7, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 5, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question7(props) {
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
                    <button onClick={() => {props.info['Question7'] = 1; index.questions(props.user, 8, props.info);}}>Angry</button>
                    <button onClick={() => {props.info['Question7'] = 2; index.questions(props.user, 8, props.info);}}>Annoyed</button>
                    <button onClick={() => {props.info['Question7'] = 3; index.questions(props.user, 8, props.info);}}>Neutral</button>
                    <button onClick={() => {props.info['Question7'] = 4; index.questions(props.user, 8, props.info);}}>Happy</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question7'] = "Skip"; index.questions(props.user, 8, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 6, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question8(props) {
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
                    <button onClick={() => {props.info['Question8'] = 1; index.questions(props.user, 9, props.info);}}>Yes</button>
                    <button onClick={() => {props.info['Question8'] = 2; index.questions(props.user, 9, props.info);}}>Sometimes</button>
                    <button onClick={() => {props.info['Question8'] = 3; index.questions(props.user, 9, props.info);}}>No</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question8'] = "Skip"; index.questions(props.user, 9, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 7, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question9(props) {
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
                    <button onClick={() => {props.info['Question9'] = 1; index.questions(props.user, 10, props.info);}}>1</button>
                    <button onClick={() => {props.info['Question9'] = 2; index.questions(props.user, 10, props.info);}}>2</button>
                    <button onClick={() => {props.info['Question9'] = 3; index.questions(props.user, 10, props.info);}}>3</button>
                    <button onClick={() => {props.info['Question9'] = 4; index.questions(props.user, 10, props.info);}}>4</button>
                    <button onClick={() => {props.info['Question9'] = 5; index.questions(props.user, 10, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question9'] = "Skip"; index.questions(props.user, 10, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 8, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question10(props) {
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
                    <button onClick={() => {props.info['Question10'] = 1; index.questions(props.user, 11, props.info);}}>1</button>
                    <button onClick={() => {props.info['Question10'] = 2; index.questions(props.user, 11, props.info);}}>2</button>
                    <button onClick={() => {props.info['Question10'] = 3; index.questions(props.user, 11, props.info);}}>3</button>
                    <button onClick={() => {props.info['Question10'] = 4; index.questions(props.user, 11, props.info);}}>4</button>
                    <button onClick={() => {props.info['Question10'] = 5; index.questions(props.user, 11, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question10'] = "Skip"; index.questions(props.user, 11, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 9, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}  

function enableButtons(item1, item2) {
    document.getElementById(item1).style.display = "block";
    document.getElementById(item2).style.display = "block";
}

function disableButtons(item1, item2) {
    document.getElementById(item1).style.display = "none";
    document.getElementById(item2).style.display = "none";
}


function Question11(props) {
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
                    <button onClick={() => enableButtons("quiz-header", "quiz-number")}>Yes</button>
                    <button onClick={() => {props.info['Question11'] = 2; disableButtons("quiz-header", "quiz-number"); index.questions(props.user, 12, props.info);}}>No</button>
                </div>
                <p id="quiz-header">How many?</p>
                <div className="option-group" id="quiz-number">
                    <button className="quiz-option" onClick={() => {props.info['Question11'] = 3; disableButtons("quiz-header", "quiz-number"); index.questions(props.user, 12, props.info);}}>1 -3</button>
                    <button className="quiz-option" onClick={() => {props.info['Question11'] = 4; disableButtons("quiz-header", "quiz-number"); index.questions(props.user, 12, props.info);}}>4 - 9</button>
                    <button className="quiz-option" onClick={() => {props.info['Question11'] = 5; disableButtons("quiz-header", "quiz-number"); index.questions(props.user, 12, props.info);}}>10+</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question10'] = "Skip"; index.questions(props.user, 12, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 10, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question12(props) {
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
                    <button onClick={() => {props.info['Question12'] = 1; index.questions(props.user, 13, props.info);}}>I tell them my sexuality</button>
                    <button onClick={() => {props.info['Question12'] = 2; index.questions(props.user, 13, props.info);}}>I tell them I don't know</button>
                    <button onClick={() => {props.info['Question12'] = 3; index.questions(props.user, 13, props.info);}}>I ignore them</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question12'] = "Skip"; index.questions(props.user, 13, props.info);}}>Skip Question</button><br/>
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

function Question14(props) {
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
                <p>On a scale of one to five - one being very rarely and five being very often - how often to you think about or question your gender identity?</p>
                <div className="button-group">
                    <button onClick={() => {props.info['Question14'] = 1; index.questions(props.user, 15, props.info);}}>1</button>
                    <button onClick={() => {props.info['Question14'] = 2; index.questions(props.user, 15, props.info);}}>2</button>
                    <button onClick={() => {props.info['Question14'] = 3; index.questions(props.user, 15, props.info);}}>3</button>
                    <button onClick={() => {props.info['Question14'] = 4; index.questions(props.user, 15, props.info);}}>4</button>
                    <button onClick={() => {props.info['Question14'] = 5; index.questions(props.user, 15, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question14'] = "Skip"; index.questions(props.user, 15, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 3, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question15(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>Current Pronouns</h3>
                <div className="progress">---------- Page 3/10 ----------</div>
                <p>On a scale of one to five - one being very uncomfortable and five being very comfortable - how comfortable are you with your current pronouns?</p>
                <div className="button-group">
                    <button onClick={() => {props.info['Question15'] = 1; index.questions(props.user, 16, props.info);}}>1</button>
                    <button onClick={() => {props.info['Question15'] = 2; index.questions(props.user, 16, props.info);}}>2</button>              
                    <button onClick={() => {props.info['Question15'] = 3; index.questions(props.user, 16, props.info);}}>3</button>
                    <button onClick={() => {props.info['Question15'] = 4; index.questions(props.user, 16, props.info);}}>4</button>
                    <button onClick={() => {props.info['Question15'] = 5; index.questions(props.user, 16, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question15'] = "Skip"; index.questions(props.user, 16, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 14, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question16(props) {
    const animateStyle = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 100 })
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <animated.div className="Question" style={animateStyle}>
            <header>
                <h3>Consider It</h3>
                <div className="progress">---------- Page 4/10 ----------</div>
                <p>Have you ever considered yourself non-cisgender?</p>
                <p style={{fontSize: "20px"}}>Being cisgender means your gender identity is the same as your sex asssigned at birth.</p>
                <div className="option-group">
                    <button onClick={() => {props.info['Question16'] = 1; index.questions(props.user, 17, props.info);}}>Yes</button>
                    <button onClick={() => {props.info['Question16'] = 2; index.questions(props.user, 17, props.info);}}>No</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question16'] = "Skip"; index.questions(props.user, 17, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 15, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question17(props) {
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
                <p>On a scale of one to five - one being very uncomfortable and five being very comfortable - how comfortable are you with the fact that you may not be cisgender? </p>
                <div className="button-group">
                    <button onClick={() => {props.info['Question17'] = 1; index.questions(props.user, 18, props.info);}}>1</button>
                    <button onClick={() => {props.info['Question17'] = 2; index.questions(props.user, 18, props.info);}}>2</button>
                    <button onClick={() => {props.info['Question17'] = 3; index.questions(props.user, 18, props.info);}}>3</button>
                    <button onClick={() => {props.info['Question17'] = 4; index.questions(props.user, 18, props.info);}}>4</button>
                    <button onClick={() => {props.info['Question17'] = 5; index.questions(props.user, 18, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question17'] = "Skip"; index.questions(props.user, 18, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 16, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question18(props) {
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
                    <button onClick={() => {props.info['Question18'] = 1; index.questions(props.user, 19, props.info);}}>Yes</button>
                    <button onClick={() => {props.info['Question18'] = 2; index.questions(props.user, 19, props.info);}}>Sometimes</button>
                    <button onClick={() => {props.info['Question18'] = 3; index.questions(props.user, 19, props.info);}}>No</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question18'] = "Skip"; index.questions(props.user, 19, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 17, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question19(props) {
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
                    <button onClick={() => {props.info['Question19'] = 1; index.questions(props.user, 20, props.info);}}>1</button>
                    <button onClick={() => {props.info['Question19'] = 2; index.questions(props.user, 20, props.info);}}>2</button>
                    <button onClick={() => {props.info['Question19'] = 3; index.questions(props.user, 20, props.info);}}>3</button>
                    <button onClick={() => {props.info['Question19'] = 4; index.questions(props.user, 20, props.info);}}>4</button>
                    <button onClick={() => {props.info['Question19'] = 5; index.questions(props.user, 20, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question19'] = "Skip"; index.questions(props.user, 20, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 18, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question20(props) {
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
                <p>On a scale of one to five -  one being very uneducated and five being very knowledgeable - how educated are you on different gender identities?</p>
                <p style={{fontSize: "20px"}}>e.g. trans, non-binary, genderqueer, etc.</p>
                <div className="button-group">
                    <button onClick={() => {props.info['Question20'] = 1; index.questions(props.user, 21, props.info);}}>1</button>
                    <button onClick={() => {props.info['Question20'] = 2; index.questions(props.user, 21, props.info);}}>2</button>
                    <button onClick={() => {props.info['Question20'] = 3; index.questions(props.user, 21, props.info);}}>3</button>
                    <button onClick={() => {props.info['Question20'] = 4; index.questions(props.user, 21, props.info);}}>4</button>
                    <button onClick={() => {props.info['Question20'] = 5; index.questions(props.user, 21, props.info);}}>5</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question20'] = "Skip"; index.questions(props.user, 21, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 19, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}  


function Question21(props) {
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
                <p>Have you taken gender identity quizzes online?</p>
                <div className="option-group">
                    <button onClick={() => enableButtons("test-header", "test-number")}>Yes</button>
                    <button onClick={() => {props.info['Question21'] = 2; disableButtons("test-header", "test-number"); index.questions(props.user, 22, props.info);}}>No</button>
                </div>
                <p id="test-header">How many?</p>
                <div className="option-group" id="test-number">
                    <button className="quiz-option" onClick={() => {props.info['Question21'] = 3; disableButtons("test-header", "test-number"); index.questions(props.user, 22, props.info);}}>1 -3</button>
                    <button className="quiz-option" onClick={() => {props.info['Question21'] = 4; disableButtons("test-header", "test-number"); index.questions(props.user, 22, props.info);}}>4 - 9</button>
                    <button className="quiz-option" onClick={() => {props.info['Question21'] = 5; disableButtons("test-header", "test-number"); index.questions(props.user, 22, props.info);}}>10+</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question21'] = "Skip"; index.questions(props.user, 22, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 20, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
}

function Question22(props) {
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
                <p>If a friend (that isn't too close) asks you what your gender identity is, how do you respond?</p>
                <div className="option-group">
                    <button onClick={() => {props.info['Question22'] = 1; index.questions(props.user, 23, props.info);}}>I tell them my gender identity</button>
                    <button onClick={() => {props.info['Question22'] = 2; index.questions(props.user, 23, props.info);}}>I tell them I don't know</button>
                    <button onClick={() => {props.info['Question22'] = 3; index.questions(props.user, 23, props.info);}}>I ignore them</button>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <button className="intro-button" onClick={() => {props.info['Question22'] = "Skip"; index.questions(props.user, 23, props.info);}}>Skip Question</button><br/>
                <button className="intro-button" onClick={() => index.previous(props.user, 21, props.info)}>Previous Page</button>
                <button className="intro-button" onClick={index.home}>Return Home</button>
            </header>
        </animated.div>
    )
} 

function GenderResult(props) {
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


export default Questions;
export {Result, GenderResult};
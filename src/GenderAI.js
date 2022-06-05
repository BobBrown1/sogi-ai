export default function results1(info) {

    var question1, question2, question3, question4, question5, question6, question7, question8, question9;

    var closeted, questioning, comfortable;

    question1 = info["Question14"]; //think about/question identity
    question2 = info["Question15"]; //confidence about identity
    question3 = info["Question16"]; //open about identity
    question4 = info["Question17"]; //assumptions
    question5 = info["Question18"]; //consider lgbtq
    question6 = info["Question19"]; //comfortable with lgbtq
    question7 = info["Question20"]; //educated
    question8 = info["Question21"]; //quizzes
    question9 = info["Question22"]; //response
    
    closeted = 0;
    questioning = 0;
    comfortable = 0;

    // comfortable

    if (question2 > 3) {comfortable += 1};
    if (question8 < 3) {comfortable += 1};
    if (question6 > 2 && question3 > 3) {comfortable += 2};
    if (question1 < 4 && question5 < 3) {comfortable += 2};
    if (question7 > 3) {comfortable += 1};
    if (question4 > 2 && question5 < 3) {comfortable += 2};
    if (question9 === 1) {comfortable+=1};

    // Questioning

    if (question1 > 2 && question2 < 4) {questioning += 2};
    if (question8 > 3) {questioning += 1};
    if (question5 < 3 && question7 < 4) {questioning += 2};
    if (question2 < 4) {questioning += 1};
    if (question3 > 4 && question5 < 3) {questioning += 2};
    if (question4 < 3) {questioning += 1};
    if (question9 === 2) {questioning+=1};

    // Closeted

    if (question2 < 3 && question5 < 3 && question3 < 3) {closeted += 2};
    if (question3 < 4) {closeted += 1};
    if (question1 > 2 && question3 < 4) {closeted += 2};
    if (question5 < 3 && question6 < 4) {closeted += 2};
    if (question4 < 3) {closeted += 1};
    if (question8 > 2) {closeted += 1};
    if (question9 === 3) {closeted+=1};

    if (closeted > questioning && closeted > comfortable) {
        return resultDesc("closeted", [comfortable, closeted, questioning]);
    } else if (questioning > closeted && questioning > comfortable) {
        return resultDesc("questioning", [comfortable, closeted, questioning]);
    } else if (comfortable > questioning && comfortable > closeted) {
        return resultDesc("comfortable", [comfortable, closeted, questioning]);
    } else if (closeted < (questioning + comfortable) && questioning === comfortable) {
        return resultDesc("questioning&comfortable", [comfortable, closeted, questioning]);
    } else if (questioning < (closeted + comfortable) && closeted === comfortable) {
        return resultDesc("closeted&comfortable", [comfortable, closeted, questioning]);
    } else if (comfortable < (closeted + questioning) && closeted === questioning) {
        return resultDesc("questioning&closeted", [comfortable, closeted, questioning]);
    } 
    if ((closeted + questioning + comfortable) === 0) {
        return <p>Hmm... we couldn't find an accurate result.<br /><p style={{fontSize: "35px", marginBottom: "-2px"}}>Results:</p>Comfortable: {comfortable}/10<br />Closeted: {closeted}/10<br />Questioning: {questioning}/10</p>;
    } 

    return <p>Hmm... we couldn't find accurate results based on your answers.<br /><p style={{fontSize: "35px", marginBottom: "-2px"}}>Results:</p>Comfortable: {comfortable}/10<br />Closeted: {closeted}/10<br />Questioning: {questioning}/10</p>;
    
}

export function resultDesc(result, stats) {
    var description, resources;
    if (result === "comfortable") {
        description = "You understand your sexuality and don't mind talking about it. You accept yourself for who you are.";
        resources = (
            <p className="resource">Being comfortable with your sexuality is great! It is what most people want long-term with their identity.
            </p>
        )
    } else if (result === "questioning") {
        description = "You are still figuring out what your sexuality is. Don't worry, it takes time!"
    } else if (result === "closeted") {
        description = "You know what your sexuality is, but you haven't told many people, if not anyone."
        resources = (
                <p className="resource">There are many resources about coming out, online and in-person! <a href="https://www.thetrevorproject.org/resources/guide/the-coming-out-handbook/">The Coming Out Handbook - The Trevor Project</a> is a great
                page to check out. <a href="https://www.glsen.org/activity/coming-out-resource-lgbtq-students">Coming Out: A resource for LGBTQ Students - GLSEN.org</a> and <a href="https://cejce.berkeley.edu/geneq/resources/lgbtq-resources/coming-out">Coming Out - UC Berkeley</a> are some more great resources.
                </p>
        )
    } else if (result === "questioning&comfortable") {
        description = "You are still figuring out what your sexuality is, but you don't mind telling others.";
        resources = (
            <p className="resource">It is important that you are comfortable with telling others about your sexuality and how you feel about it. You can take advice from others to help you learn more about yourself.
            </p>
        )
    } else if (result === "questioning&closeted") {
        description = "You are still figuring out what your sexuality is, and you haven't told many people, if not anyone.";
        resources = (
            <p className="resource">It's okay to be both questioning and closeted! It just means that you need more time to learn more about yourself and become comfortable with who you are.
            </p>
        )
    } else if (result === "closeted&comfortable") {
        description = "You have figured out what your sexuality is, but you haven't told many people, if not anyone."
        resources = (
            <p className="resource">It is important that you have figured out your sexuality. Once you begin to feel comfortable with who you are, you'll feel better about telling others!
            </p>
        )
    } 
    return (
        <div className="result">
            <h3>You are {result}!</h3>
            <p>{description}
                <br />

                {resources}

                <br />

                <u>Your Stats:</u> <br />
                Comfortable: {stats[0]}/10 <br />
                Closeted: {stats[1]}/10 <br />
                Questioning: {stats[2]}/10
            </p>
        </div>
    );
}       

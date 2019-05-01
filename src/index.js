// Make the code more concise

// import React from 'react';
import React, {Component} from 'react';

//import ReactDOM from 'react-dom';
import {render} from 'react-dom';

let swimData = {
    total: 50,
    goal: 100
}
const styles ={
    color: 'orange',
    fontWeight: 'bold'
}

// Create function components
const getPercent = decimal => {
    return decimal * 100 + '%';
}
const calcGoalProgress = (total, goal) => {
    return getPercent(total/goal);
}

// Destructure properties
//const SwimDayCounter = (props) => {
const SwimDayCounter = ({total,goal}) => {
    return (
            <section>
                <div>
                    {/* <p>Total Days: {this.props.total} </p> */}
                    <p>Total: {total} days</p>
                </div>
                <div>
                    {/* <p>Goal: {this.props.goal} </p> */}
                    <p>Goal: {goal} days </p>
                </div>
                <div>
                    {/* <p>Goal: {this.props.goal} </p> */}
                    <p style={styles}>Goal progress: {calcGoalProgress(total, goal)} </p>
                </div>
            </section>
    )
    
}

//class SwimDayCounter extends React.Component {
// class SwimDayCounter extends Component {
//     // Add custom methods to a React component using an ES6 class
//     getPercent = decimal => {
//         return decimal * 100 + '%';
//     }
//     calcGoalProgress = (total, goal) =>{
//         return this.getPercent(total/goal);
//     }
//     render() {
//         const {total, goal} = this.props; //Use a slightly shorter syntax to make the code a little easier to read
//         return (
//             <section>
//                 <div>
//                     {/* <p>Total Days: {this.props.total} </p> */}
//                     <p>Total: {total} days</p>
//                 </div>
//                 <div>
//                     {/* <p>Goal: {this.props.goal} </p> */}
//                     <p>Goal: {goal} days </p>
//                 </div>
//                 <div>
//                     {/* <p>Goal: {this.props.goal} </p> */}
//                     <p style={styles}>Goal progress: {this.calcGoalProgress(total, goal)} </p>
//                 </div>
//             </section>
//         )
//     }
// }
//ReactDOM.render
render(
    <SwimDayCounter 
        total = {swimData.total}   
        goal = {swimData.goal} 
    />,
    document.getElementById('root')
)
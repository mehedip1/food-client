import React from 'react';

const Blog = () => {
    return (
        <div className='text-center text-white bg-slate-900'>
  <h2>1.Tell us the differences between uncontrolled and controlled components? <br />
 <span>Ans = All Swing components are so-called "lightwight" components because they are written in java. If for example you run Swing application and try to analyze it using UI analyzing tool (e.g. WinSpy in windows) you see only one element: the window (JFrame) itself. All other components are drawn from OS point of view.</span></h2> <br />

<p>How to validate React props using PropTypes</p>

    <p>  Tell us the difference between nodejs and express js. <br />

    <span>Ans= Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes</span>
    </p>
    <br />

     <p>What is a custom hook, and why will you create a custom hook? <br />
     <span>Ans = Difference between Node.js and Express.js: Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript. Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.</span></p>
     </div>
    );
};

export default Blog;
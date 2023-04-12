import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>Q/A</h1>
            <div>
                <h2>When should you use context API?</h2>
                <h3>Ans: <span>We should use the Context API in React when you need to pass data from a parent component to a deeply nested child component without passing it through all the intermediary components. It provides a way to share data between components without having to pass props down manually at every level </span>.</h3>  

                <h2>What is a custom hook?</h2>
                <h3>Ans: <span>A custom hook is a reusable function in React that allows you to share logic between components. It is a way to abstract away complex logic and stateful functionality into a custom hook that can be imported and used in multiple components. Custom hooks are created by prefixing the function name with the word "use".</span></h3>

                <h2>What is useRef?</h2>
                <h3>Ans: <span>useRef is a hook in React that provides a way to create a mutable reference that persists across re-renders. It can be used to access the properties of DOM elements, manage focus, or store any mutable value that needs to be accessed between renders.</span></h3>

                <h2>What is useMemo?</h2>  
                <h3>Ans: <span>useMemo is a hook in React that allows you to memoize a value or computation and avoid unnecessary re-renders of a component. It takes a function and an array of dependencies as inputs and returns a memoized value. The function is only re-run when one of the dependencies changes, which can help optimize performance in certain scenarios by preventing expensive calculations or rendering.</span></h3>          
            </div>
        </div>
    );
};

export default Blogs;
# ReactJS


React is a library for building user interfaces. PERIOD

React runs on the client as a SPA(Single page application), but can be used to build full stack apps by communicating with a server/API (eg, MERN stack) 

React is often referred to as a front-end "framework" because it is capable and directly comparable to a frameork such as Angular and Vue. 


### Why Learn React 


- Structure the "view" layer of your application. 

- Reusable components with their own state. 

- Interactive UIs with virtual DOM.

- Performance and testing. 

- JSX - Dynamic markup. 

- Very popular in the industry. 

### Must know, Prerequisites


1-HTML

2- CSS

3- JS: ES6, Async programming (Fetch, Promises APIs), Array functions, hoisting, this, arrow functions. 


### Components: Functions vs Classes 


Components render/return JSX(Javascript Syntax Extension)

Components can also take in "props"?


Function component. 


```jsx
export const Header = () => {
    return (
        <div> 
            <h1> MY Header </h1> 
        </div>
    )
}
```

Classes component. 


```jsx
export default class  Header extends React.Component {
    render() {
        return (
              <div> 
            <h1> MY Header </h1> 
        </div>
        )
    }
}
```


<Header title="My Title">


### Working With State 


Components can have "state"  which is an object that determines how a component renders and behaves. 

"App" or "global" staterefers to state that is available to the entire UI, not just a single component. 


Prior to React 16.8, we have to use class based components to use state. Now, we can use functional components with hooks. 

#### React Hooks 

React hooks are functions that let us hook into the React state and lifecycle feattures from function components. 


- UseState - Returns a stateful value and a function to update it. 

- useEffect - Perform side effects in function components. 

- useContext, useReducerm useRef- Beyond the scope od this tutorial right now. 


### Structure of a create-react-app project. 


- index.js 

    - App.js (Root compoennt) with its styles. 



### Props 


Props are used to pass dato from one component to another. 

- PropTypes  


- DefaultProps 



### Style 

We can perform inline styling by using <code> style ={{color:'red'}} </code>



### Commone Question 


1- What is the famous warning  "Each child in a list should have a unique "key" prop"?

- Answer: This means that we have a list of items which we are processing without providing  a unique id. There is a prop called "key" which we can use to provide a uniqe id. 



2- What is the context API? 





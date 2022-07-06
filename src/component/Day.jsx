import './DAY.css'
import React from "react";
const Day = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
// function Day() {
  return (
    <div >
      <h1>1.What is Virtual DOM</h1>
      <p >
        1..The virtual DOM is a programming concept where an ideal, or virtual,
        representation of a UI is kept in memory and synced with the real DOM
        by a library such as ReactDOM. This process is called reconciliation.
        <br/>2..A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power to directly change what's on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen.
        <b/>3..DOM: DOM stands for 'Document Object Model'. In simple terms, it is a structured representation of the HTML elements that are present in a webpage or web-app. DOM represents the entire UI of your application.
        <br/>4..The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. 
        <br/>5..The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
      </p>
      <h1>2.What is SPA</h1>
      <p>
        1.SPA stands for Single Page Application. It is a very common way of programming websites these days. The idea is that the website loads all the HTML/JS the first time you visit. When you then navigate, the browser will only rerender the content without refreshing the website.
        2.This is used to make the user experience feel a lot smoother. You can tell when it’s a SPA or multi-page application when navigating between menus often because a multi-page application will reload, making the whole UI blink fast depending on the content. This is due to it refreshing the website. A SPA will instead feel smooth in the transaction as it simply shows other content without refreshing.
        </p>
        
        <button onClick={() => openInNewTab('https://google.com')}>
        Open google
      </button>
      <h1>3.What is difference between class and functional component</h1>
      <p>
        <h3>1.Functional Components</h3>
        i...A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).
        ii...There is no render method used in functional components.
        Functional component run from top to bottom and once the function is returned it cant be kept alive.
        Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
        React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
        Hooks can be easily used in functional components to make them Stateful.
        Constructors are not used.
        {/* example: const [name,SetName]= React.useState(‘ ‘) */}
        <h3>2.Class Components</h3>
        i.A class component requires you to extend from React. Component and create a render function which returns a React element.
        ii.It must have the render() method returning JSX (which is syntactically similar to HTML)
        iii..Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.
        iv.Also known as Stateful components because they implement logic and state.
        v.React lifecycle methods can be used inside class components (for example, componentDidMount).
        vi.It requires different syntax inside a class component to implement hooks.
        {/* example: constructor(props) {super(props); */}
        {/* this.state = {name: ‘ ‘}} */}
        </p>
      <h1>4.What does mean by state and its use in react?</h1>
      <p>The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders
      State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application. In React, all the code we write is defined inside a component.
      Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private (cannot be accessed from outside)      
    </p>
    <h1>5.What is JSX and why do we use it instead of js?</h1>
    <p>
    1.JS is simply a scripting language, adding functionality into your website. JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript. Both JS and JSX are interchangeable but JSX makes the code easier to understand for users.
    2.JSX stands for JavaScript XML. It is a syntax extension for JavaScript that lets you use HTML tags right inside your JavaScript file.
    3.JSX stands for JavaScript XML.JSX allows us to write HTML in React.JSX makes it easier to write and add HTML in React.
    4.JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
    5.JSX In React, instead of using regular JavaScript for templating, it uses JSX. JSX is a simple JavaScript that allows HTML quoting and uses these HTML tag syntax to render subcomponents.
    </p>
    <h1>6.What is package.json</h1>
    <p>
    If you ever worked on node.js, npm application, Angular application, etc, you might encounter with packge.json file. This file is a kind of manifest file for your application. This file plays a very important role in the react application development and deployment.In short, we can say,Package.json = Metadata associated with project + All Dependencies with version + scripts
    In the react project you can see the package.json file in the react project structure, double click on the package. json file and see the code, Please see below the code of the package.json file, Now we will try to discuss each section of the package.json file to get a better understanding, Name - Name of the react application.
    </p>
    </div>
  );
}

export default Day;

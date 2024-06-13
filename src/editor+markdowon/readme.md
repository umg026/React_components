# React Overview

React is a popular JavaScript library for building user interfaces, particularly for single-page applications where a seamless user experience is desired. It allows developers to create large web applications that can change data, without reloading the page.

## Key Features of React

- **Component-Based**: React applications are built using components, which are independent, reusable pieces of code. This makes it easy to manage and scale applications.

- **Virtual DOM**: React uses a virtual DOM to efficiently update the view. When data changes, React updates only the parts of the DOM that need to be changed, making updates faster and more efficient.

- **Declarative**: React makes it easy to create interactive UIs. Designers can simply describe how the UI should look for each state of the application, and React will handle the updates when the state changes.

- **JSX**: React uses JSX, a syntax extension that allows mixing HTML with JavaScript. This makes the code easier to read and write.

## Example Code

Here's a simple example of a React component:

```js
import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to learning React.</p>
      <img src="https://via.placeholder.com/150" alt="React Logo" />
    </div>
  );
}

export default HelloWorld;
```
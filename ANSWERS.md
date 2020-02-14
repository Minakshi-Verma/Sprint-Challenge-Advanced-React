- [ ] Why would you use class component over function components (removing hooks from the question)?

I would use class component over functional component when I want to access local state or any of the lifecycle methods(like componentDidMount, componentDidUpdate or componentWillUnmount).

- [ ] Name three lifecycle methods and their purposes.

Three lifecycle methods are:
componentDidMount,
componentDidUpdate,
componentWillUnmount

componentDidMount method is called after the component gets mounted on the DOM. It is called once in a lifecycle. In this method, we can make API calls and update the state with the API response.
componentDidUpdate is where component’s state changes and hence, re-rendering takes place.This component takes two arguments prevProps and prevState and always take an if statement and update the state and hence cause the rerendering of the component.
componentWillUnmount is called at the end of the life cycle which represents the end of life of the component. In other words, component will be mounted on DOM only when it needs to be rendered. If we change the route or refresh the page or want to render our component on specific events (eg onClick show/hide the component) then componentWillUnmount() will be called and component will be removed from DOM. 
Unmounting of component is necessary in case of subsription, timers and click events (that are not react click events).

- [ ] What is the purpose of a custom hook?

Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time we use a custom Hook, all state and effects inside of it are fully isolated.In other words, they make the code dry and can make coding experience a lot convenient.

- [ ] Why is it important to test our apps?

Testing helps make sure that the app works across different devices and mobile operating systems and it doesn’t crash, have bugs, load too slowly, drain the user’s battery, etc. So extensive testing is a critcal part  of development of any app since no one wants their app to crash once it is in production.

#fantastic site, and tutorial
https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/#create-a-store

# reduxtypescript
## Create redux type script app
- npx create-react-app my-app --template typescript

## install redux and create first store
- yarn add redux react-redux redux-thunk or   npm install redux react-redux redux-thunk
## install redux types for type script, so that type script can parse, and understand the strong typed redux
-  yarn add -D @types/redux @types/react-redux @types/redux-thunk or   npm install -D @types/redux @types/react-redux @types/redux-thunk

## create type script types for project
- Create the type script types for our project article/articles state data for the store,, article action.  dispatch type. 

Here, we start by declaring the interface IArticle which reflects the shape of a given article.

Then, we have ArticleState, ArticleAction, and DispatchType that will serve as types for, respectively, the state object, the action creators, and the dispatch function provided by Redux.

## Add action creators
- store/actionCreators.ts
Here, the function addArticle will dispatch an action for adding a new article, and the method removeArticle will do the opposite. So delete the object passed in as an argument.
  

## Add reducer

A reducer is a pure function that receives the state of the store and an action as parameters and then returns the updated state.
- initial state (if want)
- use store to get state.

## add store

- store is where the state lives
- we were handling the sate with the reducer, now we create the store 

it is configured in index.tsx

As you can see, we import the reducer function and then pass it as an argument to the method createStore in order to create a new Redux store. The redux-thunk middleware needs to be proceeded as a second parameter as well to the method to be able to handle asynchronous code.

Next, we connect React to Redux by providing the store object as props to the Provider component.

We can now use Redux in this project and access the store. So, let's create the components to get and manipulate the data.

## Components

### add article components/AddArticle.tsx -- adds a new article to store.

To add a new article, we will be using this form component. It receives the function saveArticle as a parameter, which allows adding a new article to the store.
The article object should follow the type IArticle to make TypeScript happy.

### Article object: components/AddArticle.tsx
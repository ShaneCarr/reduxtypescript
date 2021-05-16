import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./styles.css"

//  our components
import { Article } from "./components/Article"
import { AddArticle } from "./components/AddArticle"

// actions
import { addArticle, removeArticle } from "./store/actionCreators"


// import hook to dispatch actions to store.
import { Dispatch } from "redux"

// The useSelector hook enables access to the state of the store. Here, we pass shallowEqual as a second argument to
// the method to tell to Redux to use shallow equality when checking for changes.
const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
      (state: ArticleState) => state.articles,
      shallowEqual
  )

  // hook to dispatch actions to store.
  const dispatch: Dispatch<any> = useDispatch()

  // Adding an article: the delegate method for save or adding an article. this is used by the add article component
  // this is different than remove:
  // -- Next, the use of useCallback helps to avoid unnecessary re-rendering by memoizing values as dependencies.
  const saveArticle = React.useCallback(
      // this is the dispatch that send the article to to store
      (article: IArticle) => dispatch(addArticle(article)),
      [dispatch]
  )

  return (
      <main>
        <h1>My Articles</h1>
        <AddArticle saveArticle={saveArticle} />
        {articles.map((article: IArticle) => (
            <Article
                key={article.id}
                article={article}
                removeArticle={removeArticle}
            />
        ))}
      </main>
  )
}

export default App

/*
architecture

      app
             actions:
                  addArticle
                  removeArticle

             components: use actions to send messages.
                 addarticle

                App.tsx
                This is all configured in this file and the referenced components:

                 list of articles (each with a remove button)
                    Data: usesselector is a hook that gets access to the react data store. state.articles

                    each article has a remove button, that is wired up iwth the dispatc hook for the method call on click

                    example to add in app dispatch(addArticle(article)),

                    example to remove in article    (article: IArticle) => dispatch(removeArticle(article)),

                  Index.tsx
                   - import app
                   - import reducer

                   when you create store, we pass our reducer. this is going
                   we import the reducer function and then pass it as an argument to the method createStore in order to create a new Redux store.

                   } = createStore(reducer, applyMiddleware(thunk))
 */
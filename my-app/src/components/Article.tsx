import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

// remove passed here
type Props = {
    article: IArticle
    removeArticle: (article: IArticle) => void
}

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
    // the dispatch hook.
    const dispatch: Dispatch<any> = useDispatch()

    const deleteArticle = React.useCallback(
        // dispatch hook, send to store (interface to react)
        (article: IArticle) => dispatch(removeArticle(article)),
        [dispatch, removeArticle]
    )

    return (
        <div className="Article">
            <div>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
            </div>
            <button onClick={() => deleteArticle(article)}>Delete</button>
        </div>
    )
}
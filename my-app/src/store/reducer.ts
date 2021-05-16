import * as actionTypes from "./actionTypes"

const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "post 1",
            body:
                "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
            id: 2,
            title: "post 2",
            body:
                "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
        },
    ],
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
): ArticleState => {
    switch (action.type) {
        //  application state: adding an app (on the client)
            // the action actually calls the service.
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(), // not really unique
                title: action.article.title,
                body: action.article.body,
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle),
            }

            // application state to remove article in store. note the action actually calls the service.
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter(
                article => article.id !== action.article.id
            )
            // merge the articles property into state. ... (spread operator)
            return {
                ...state,
                articles: updatedArticles,
            }
    }
    return state
}

export default reducer
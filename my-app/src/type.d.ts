// The specific article item
interface IArticle {
    id: number
    title: string
    body: string
}

// the store contains this set. We will use the spread operation to add and remove the intems with each call.
type ArticleState = {
    articles: IArticle[]
}

// each action has a type (say add remove and the article.
type ArticleAction = {
    type: string
    article: IArticle
}

// constraints our calls to article action.
type DispatchType = (args: ArticleAction) => ArticleAction
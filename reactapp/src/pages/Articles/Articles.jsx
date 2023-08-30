import { useEffect, useState } from 'react';

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        populateArticleData();
    }, [])


    const renderArticlesCards = (articles) => {
        return (
            <div>
                {articles.map((article, index) =>
                    <a href={article.link} className="card-link" target="_blank" rel="noopener noreferrer" key={index}>
                        <div className="mb-4 card-body card py-1">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.summary}</p>
                            <div className="d-flex justify-content-between align-items-baseline">
                                <small className="card-topic">{formatDate(article.published)}</small>
                                <span className="card-topic text-right">{article.topic.join(", ")}</span>
                            </div>
                        </div>
                    </a>
                )}
            </div>
        )
        function formatDate(dateString) {
            const date = new Date(dateString);
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
            const formattedDate = date.toLocaleDateString(undefined, options);
            return formattedDate;
        }
    }


    const populateArticleData = async () => {
        //För topic, sortBy och limit val
        const queryString = window.location.search;
        const searchParams = new URLSearchParams(queryString); //Kollar url länken efter '?'
        var topic = searchParams.get('topic');
        var sortBy = searchParams.get('sortBy');
        var limit = searchParams.get('limit');
        topic = topic == null ? "" : topic;
        sortBy = sortBy == null ? "" : sortBy;
        limit = limit == null ? "" : limit;
        setLoading(true)
        const token = localStorage.getItem("token")
        const response = await fetch(`/home?topic=${topic}&sortBy=${sortBy}&limit=${limit}`)
        const data = await response.json();
        setArticles(data)
        setLoading(false)
    }

    return (
        <div>
            {loading
                ? <div><p><em>Loading articles... </em></p></div>
                : renderArticlesCards(articles)}
        </div>
    );
}
export default Articles;
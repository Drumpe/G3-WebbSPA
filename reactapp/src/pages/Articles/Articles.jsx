import { useEffect, useState } from 'react';
import SelectsComponent from './components/select';
import { selectedSorting, selectedTopic } from './redux/topicSortSlice';
import { useSelector } from 'react-redux';

const Articles = () => {
    const [articles, setArticles] = useState([])
    const searchTopic = useSelector(selectedTopic);
    const sorting = useSelector(selectedSorting);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        populateArticleData();
    }, [searchTopic, sorting])

    const populateArticleData = async () => {
        setLoading(true)
        const token = localStorage.getItem("token")
        const response = await fetch(`/home?topic=${searchTopic}&sortBy=${sorting}`, { headers: { 'Authorization': `Bearer ${token}` } });
        const data = await response.json();
        setArticles(data)
        setLoading(false)
    }

    const renderPage = () => {
        return <>
            <SelectsComponent />
            {renderArticlesCards()}
        </>
    }

    const renderArticlesCards = () => {

        function formatDate(dateString) {
            const date = new Date(dateString);
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
            const formattedDate = date.toLocaleDateString(undefined, options);
            return formattedDate;
        }

        function remove_img_p(text) {
            text = text.replaceAll("<p>", "");
            text = text.replaceAll("</p>", "");
            if (text.includes("<img src=")) {
                let endIndex = text.indexOf("/>");
                text = text.substr(endIndex+2, text.length - 2 - endIndex);
            }
            return text;
        }

        return (
            <div>
                {articles.map((article, index) =>
                    <a href={article.link} className="card-link" target="_blank" rel="noopener noreferrer" key={index}>
                        <div className="mb-4 card-body card py-1">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{remove_img_p(article.summary)}</p>
                            <div className="d-flex justify-content-between align-items-baseline">
                                <small className="card-topic">{formatDate(article.published)}</small>
                                <span className="card-topic text-right">{article.topic.join(", ")}</span>
                            </div>
                        </div>
                    </a>
                )}
            </div>
        );
    }

    return (
        <div>
            {loading
                ? <p><em>Loading...</em></p>
                : renderPage()}
        </div >
    );
}

export default Articles;
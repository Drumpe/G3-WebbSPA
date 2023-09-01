import Weather from './Weather/Weather';
import Articles from './Articles/Articles';
import RightColumn from './RightColumn';

const mainPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 mt-5">
                    <Weather />
                </div>
                <div className="col-sm-6 mt-5">
                    <Articles />
                </div>
                <div className="col-sm-3 mt-5">
                    <RightColumn />
                </div>
            </div>
        </div>
    );
};

export default mainPage;

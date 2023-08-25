import RightColumn from './RightColumn'
import Weather from './Weather'
import Articles from './Articles/Articles'

const mainPage = () => {
    return (
        <>
            <div className="col-sm-3">
                <Weather />
            </div>
            <div className="col-sm-6">
                <Articles />
            </div>
            <div className="col-sm-3">
                <RightColumn />
            </div>
        </>
    );
};
export default mainPage;
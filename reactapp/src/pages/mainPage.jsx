import RightColumn from './RightColumn'
import Weather from './Weather/Weather'
import Articles from './Articles/Articles'

const mainPage = () => {
    return (
        <>
            <div className="col-sm-3 mt-5"> 
                <Weather />
            </div>
            <div className="col-sm-6 mt-5"> 
                <Articles />
            </div>
            <div className="col-sm-3 mt-5"> 
                <RightColumn />
            </div>
        </>
    );
};
export default mainPage;
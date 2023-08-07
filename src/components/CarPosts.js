import CarPost from "./CarPost";

const CarPosts = ({ carData }) => {
    return (
        <div className="mainContainer">
            <h1 className="title">Car Blog</h1>
            <div className="subTitle">
                <h4>Developed with Contentful CMS, React.js and Google Analytics</h4>
                <h4>Developed by Nidhi Singh</h4>
            </div>
            {carData.map((item)=> {
            return (<CarPost key={item.sys.id} item={item.fields}/>)})}
        </div>
    )
};

export default CarPosts;
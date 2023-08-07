import { useState } from "react";
import ReactGA from 'react-ga4';

const CarPost = ({ item }) => {
    const imgUrl = item['modelImage']['fields']['file']['url'];
    const [desc, setDesc] = useState(false);
    const showModelDetails = () => {
        setDesc(!desc);
        ReactGA.event({
            category: item.modelName,
            action: 'click',
            label: 'test',
            value: item.modelPrice
        });
    }
    return (
        <div className="postContainer">
            <div className="ImageContainer">
                {imgUrl && <div><img src={imgUrl} alt={item.modelImage.fields.title} /></div>}
            </div>
            <div className="descContainer">
                <div className="heading">{item.modelBrand} {item.modelName} {item.modelYear}</div>
                <div>
                    <span className="model_type">{item.modelType}</span>
                    <span className="model_rating">Rating: {item.modelRating + '/10'}</span>
                </div>
                <div><span className="model_price">{item.modelTrim}: ${item.modelPrice}</span></div>
                <div className="hide_button" onClick={showModelDetails}>{desc ? 'Hide description' : 'Show description'}</div>
                {desc && <div className="model_desc">{item.modelDescription}</div>}
            </div>
        </div>
    )
};

export default CarPost;
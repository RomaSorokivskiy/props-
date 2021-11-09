import { Carousel }from 'react-bootstrap/'
import {useState} from "react";

const Api = "//makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

export default function CarouselWrapper(){

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }





    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="block">
                    <h1>,,</h1>
                    <p>Blandit et augue nulla suscipit ut ut quis ad feugiat ut luptatum, consequat, lobortis, aliquip dolore, iriure veniam te dolor aliquip.</p>
                    <h3>Lorem</h3>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="block">
                    <h1>,,</h1>
                    <p>Blandit et augue nulla suscipit ut ut quis ad feugiat ut luptatum, consequat, lobortis, aliquip dolore, iriure veniam te dolor aliquip.</p>
                    <h3>Lorem1</h3>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="block">
                    <h1>,,</h1>
                    <p>Blandit et augue nulla suscipit ut ut quis ad feugiat ut luptatum, consequat, lobortis, aliquip dolore, iriure veniam te dolor aliquip.</p>
                    <h3>{Api}</h3>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

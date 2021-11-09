import Header from "./header";

import title from '../../img/title.png'
import CarouselWrapper from "../carousels";


export default function App() {
    return(
        <div className="main">
            <Header></Header>
            <div className="main_block">
                <div className="container">
                    <img src={title} alt="title"/>
                    <CarouselWrapper></CarouselWrapper>
                </div>
            </div>
        </div>
    )
}

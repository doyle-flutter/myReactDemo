import {useEffect, useState} from 'react';
import './Main.css';
  
const MainPage = () => {
    let slideIndex = 1;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
      
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    }
    
    useEffect(() => showSlides(slideIndex));
    
    return (
        <div>
            <div>
                <div style={{padding:'20px'}}>
                    <p>안녕하세요</p>
                    <p>w3Schools.com - 'How To' 를 사용하여 디자인을 나타내었습니다</p>
                </div>
            </div>
            <div className="container">
                <div className="mySlides">
                    <div className="numbertext">{"1 / 6"}</div>
                    <img src={"https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501__480.jpg"}  alt="img"/>
                </div>

                <div className="mySlides">
                    <div className="numbertext">{"2 / 6"}</div>
                    <img src={"https://cdn.pixabay.com/photo/2020/11/19/18/56/snow-5759500__480.jpg"}  alt="img"/>
                </div>

                <div className="mySlides">
                    <div className="numbertext">{"3 / 6"}</div>
                    <img src={"https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501__480.jpg"}  alt="img"/>
                </div>
                    
                <div className="mySlides">
                    <div className="numbertext">{"4 / 6"}</div>
                    <img src={"https://cdn.pixabay.com/photo/2020/11/19/18/56/snow-5759500__480.jpg"}  alt="img"/>
                </div>

                <div className="mySlides">
                    <div className="numbertext">{"5 / 6"}</div>
                    <img src={"https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501__480.jpg"}  alt="img"/>
                </div>
                    
                <div className="mySlides">
                    <div className="numbertext">{"6 / 6"}</div>
                    <img src={"https://cdn.pixabay.com/photo/2020/11/19/18/56/snow-5759500__480.jpg"}  alt="img"/>
                </div>
                    
                <button className="prev" onClick={() => plusSlides(-1)}>❮</button>
                <button className="next" onClick={() => plusSlides(1)}>❯</button>

                <div className="caption-container">
                    <p id="caption"></p>
                </div>
                <div className="row">
                    <div className="column">
                        <img className="demo cursor" src={"https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501__480.jpg"}  onClick={ () => currentSlide(1)} alt="The Woods" />
                    </div>
                    <div className="column">
                        <img className="demo cursor" src={"https://cdn.pixabay.com/photo/2020/11/19/18/56/snow-5759500__480.jpg"}  onClick={ () => currentSlide(2)} alt="Cinque Terre" />
                    </div>
                    <div className="column">
                        <img className="demo cursor" src={"https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501__480.jpg"}  onClick={ () => currentSlide(3)} alt="Mountains and fjords" />
                    </div>
                    <div className="column">
                        <img className="demo cursor" src={"https://cdn.pixabay.com/photo/2020/11/19/18/56/snow-5759500__480.jpg"}  onClick={ () => currentSlide(4)} alt="Northern Lights" />
                    </div>
                    <div className="column">
                        <img className="demo cursor" src={"https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501__480.jpg"}  onClick={ () => currentSlide(5)} alt="Nature and sunrise" />
                    </div>    
                    <div className="column">
                        <img className="demo cursor" src={"https://cdn.pixabay.com/photo/2020/11/19/18/56/snow-5759500__480.jpg"}  onClick={ () => currentSlide(6)} alt="Snowy Mountains" />
                    </div>
                </div>
            </div>
            <GridView list={[1,2,3]}/>
        </div>
    );
}

const GridView = (props) => {
    return (
        <div>
            <div style={{display:'flex', flex:1, flexDirection:'row',  padding:'5px'}}>{props.list.map(e => <GridViewItem item={e} key={e}/>)}</div>
        </div>
        
    );
}

const GridViewItem = (props) => {
    return (
        <div className="gItem" style={{display:'flex', flex:1, flexDirection:'column',justifyContent:'space-around',margin:'10px', backgroundColor:'red',fontSize:'0'}}>
            <a href="/" target="__blank">
                <div><img src={"https://cdn.pixabay.com/photo/2020/08/28/21/26/faro-5525698__480.jpg"} width="100%" /></div>
                <div style={{fontSize:'14px'}}>{props.item}</div>
            </a>
        </div>
    );
}


export default MainPage;
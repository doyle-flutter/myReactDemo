import {useEffect, useState} from 'react';
import './Main.css';
  
const MainPage = () => {

    const imgList = [
        {
            name:'woods1',
            src:"https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501__480.jpg"
        },
        {
            name:'woods2',
            src:"https://cdn.pixabay.com/photo/2020/11/19/18/56/snow-5759500__480.jpg"
        },
        {
            name:'woods3',
            src:"https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501__480.jpg"
        },
        {
            name:'woods4',
            src:"https://cdn.pixabay.com/photo/2020/11/19/18/56/snow-5759500__480.jpg"
        },
        {
            name:'woods5',
            src:"https://cdn.pixabay.com/photo/2019/10/27/18/48/dumbo-4582501__480.jpg"
        },
        {
            name:'woods6',
            src:"https://cdn.pixabay.com/photo/2020/11/19/18/56/snow-5759500__480.jpg"
        },
    ];


    let [slideIndexState, setState] = useState({index:1, currentImg:imgList[0]});
    
    const currentSlide = (n) => setState({index:n,currentImg:imgList[n-1]})
      
    const showSlides = (n) => {
        let i = slideIndexState.index+n;
        if(i <= 0){
            return setState({
                index: imgList.length,
                currentImg : imgList[imgList.length-1]
            });
        }
        if(i > 6){
            return setState({
                index: 1,
                currentImg : imgList[0]
            });
        }
        return setState({
            index: i,
            currentImg : imgList[i-1]
        });
    }
    
    useEffect(() => {});
    
    return (
        <div>
            <div>
                <div style={{padding:'20px'}}>
                    <p>안녕하세요</p>
                    <p>w3Schools.com - 'How To' 를 사용하여 디자인을 나타내었습니다</p>
                </div>
            </div>
            <div className="container">
                <div className="mySlidesq">
                    <div className="numbertext">{slideIndexState.index + "/ 6"}</div>
                    <img src={slideIndexState.currentImg.src}  alt={slideIndexState.currentImg.name}/>
                </div>
                    
                <button className="prev" onClick={() => showSlides(-1)}>❮</button>
                <button className="next" onClick={() => showSlides(1)}>❯</button>

                <div className="caption-container">
                    <p id="caption">{slideIndexState.currentImg.name}</p>
                </div>
                <div className="row">
                    {imgList.map(
                        e => <div className="column" key={e.name}><img className="demo cursor" src={e.src}  onClick={ () => currentSlide(imgList.indexOf(e)+1)} alt={e.name} /></div>)}
                </div>
            </div>
            <View list={[1,2,3]}/>
        </div>
    );
}

const View = (props) => {
    return (
        <div>
            <div style={{textAlign:'center', fontSize:0}}>
                {props.list.map(e => <ViewItem item={e} key={e}/>)}
            </div>
        </div>
        
    );
}

const ViewItem = (props) => {
    return (
        <div className="gItem" 
            style={{width:'28vw', height:'30vw', display:'inline-block', margin:'1vw'}}>
            <a href="/" target="__blank">
                <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2020/08/28/21/26/faro-5525698__480.jpg)",backgroundRepeat:'no-repeat', backgroundSize:'100% 100%', width:'100%', height:'30vw'}}>
                    <div style={{height:'100%', verticalAlign:'middle' }}>
                        <div style={{display:'inline-block', height:'100%', verticalAlign:'middle'}}></div>
                        <p style={{display:'inline-block',verticalAlign:'middle', fontSize:'1rem'}}>{props.item}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}


export default MainPage;
import {Link} from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <p>안녕하세요</p>
            <p><Link to='/myReactDemo/sub'>이동</Link></p>
            
        </div>
        
    );
}

const AppBar = () => {
    
}


export default MainPage;
import './AppBar.css'
import {useState} from 'react';
import {Link} from 'react-router-dom';


const AppBar = (props) => {
    // let [id, setState] = useState(0);   
    return (
        <div className="topnav" id='topnav'>
            <Link className={props.id === 0 ? "active" : ""} to='/' >HOME</Link>
            <Link className={props.id === 1 ? "active" : ""} to='/sub' >Sub</Link>
        </div>
    );
}

export default AppBar;
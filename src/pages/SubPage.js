import {Link} from 'react-router-dom';

const SubPage = () => {
    return (
        <div>
            <p>두번째 페이지입니다</p>
            <Link to='/' replace={true}>뒤로</Link>
        </div>
    )
};

export default SubPage;
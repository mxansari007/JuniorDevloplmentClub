import './Assets/Navbar.scss';
import { useNavigate } from 'react-router-dom';

const Navbar = ()=>{
    const Navigator = useNavigate();
    return <>
    <div className='Navbar' onClick={()=>{
            Navigator('/');
    }}>
        <h1>Juniors Development Club</h1>
    </div>
    </>
}

export default Navbar;
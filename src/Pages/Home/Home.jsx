import './Assets/Home.scss';
import gitLogo from './Assets/Git-logo.png';
import linuxLogo from './Assets/Linux-logo.png';
import { useNavigate } from 'react-router-dom';
const Home = ()=>{
    const Navigator = useNavigate();
    return <>


        <div className='Main-Section-Home'>
        <div className='Box-container'>
            <div onClick={()=>{Navigator('/Git')}} className='Box'>
                <img src={gitLogo} />
            </div>
            <div className='Box'>
                <img src={linuxLogo} />
            </div>
            </div>
            <div className='Button' onClick={()=>{Navigator('/assignment')}}>
                <p>Assignments  <i className='fa-solid fa-arrow-right fa-beat'></i></p>
            </div>
        </div>

    </>
}


export default Home;
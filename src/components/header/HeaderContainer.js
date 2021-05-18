import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import HomeContainer from '../../Components/home/HomeContainer'
import './header.css';
const HeaderContainer = ({history,isLogged}) =>{
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }
    return(
        <nav>
            <div className='div-header'>
                <div className='div-svg' onClick={() => history.push('/')}>
                    <Logo/>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <button className='button-header' onClick={handleClick}>Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(HeaderContainer);

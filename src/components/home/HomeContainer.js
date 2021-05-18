import React from "react";
import React from 'react';
import {Switch,Route} from 'react-router-dom'
import HeaderContainer from '../../Components/Header/HeaderContainer';
import TasksContainer from "../tasks/TasksContainer";
import "./home.css";

const HomeContainer = ({handleLogged}) => {
    return(
        <div>
              <HeaderContainer isLogged={handleLogged}/>
              <Switch>
           <Route exact path='/' component={TasksContainer}/>
           </Switch>
        </div>
    )
};

export default HomeContainer;

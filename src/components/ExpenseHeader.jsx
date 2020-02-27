import React from "react";
import { Link} from 'react-router-dom';
import styled from 'styled-components'
import LogoImg from '../assets/img/logo.jpg'
import {LogoTxtAdj, LogoHeaderWrap, HeaderWrap } from '../assets/Styles'
const ExpenseHeader = () => {

  
  return (
    <div>

      {/* Form Header*/}
      <HeaderWrap >

  <LogoHeaderWrap>    

    <img src={LogoImg} alt = 'logo'/><h1>Budget Freedom</h1>
            
    </LogoHeaderWrap>
            <nav>
            <Link to ='/login'>Login</Link>
              <Link to='/signup'>Sign Up</Link>
              <Link to='/personal-form'>Personal Expense</Link>
              <Link to='/moving-form'>Moving Expense</Link>
              <Link to='/dashboard'>Dashboard</Link>
       
            </nav>
    
  
       </HeaderWrap>
      </div>


  )
}

export default ExpenseHeader
import styled from 'styled-components'


/** FORM STYLING **/
export const TitleHeader = styled.h2`

margin-bottom: -15px;
width 33vw;
margin 0 auto;
padding: 15px 0;

`
export const FormWarp = styled.div`
    width: 55vw;
    display:flex;
    padding: 20px 20px;
    margin: 15px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;

`
export const FieldCta = styled.div`
    display: flex;
    flex-direction:column;

    width:fit-content;
    padding:45px;

`
export const ErrorPrompt = styled.p`
    color:#8AC748;
    margin-bottom:-20px;
    margin-top:-2px;
    font-weight: 600;
`

export const BorderWrap = styled.div`
displauy:flex;
width: 75vw;
margin: 0 auto;
padding-bottom: 32px;
flex-direction:row;

label {
    width:fit-content;
}
`
export const ExpenseCta = styled.div`
    height: 15vh;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items: stretch;
    align-content: center;
    margin: 5px;
`

export const HeaderWrap = styled.div`
display: flex;
flex-direction:column;
width:100%;
color: #fffff;

font-family: 'Architects Daughter', cursive;
margin: 0 auto;

a {
 text-decoration:none;
 padding:0.5rem;
 font-size:1.2rem;
 color:black;
}
nav {
  display:flex;
  justify-content:space-around;
}
header {
  width:100%;
}`


export const LogoHeaderWrap = styled.div `
display:flex;
justify-content:space-evenly;
height:75px;
background:  #FDFED2;
padding-bottom: 2.1rem;

img {
  height:5.4rem;
  margin-top:10px;
}
h1 {
  font-size:2.1rem;
  margin-left:-200px;


}
`
export const LogoTxtAdj = styled.div `
margin-left:-800px`

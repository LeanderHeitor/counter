
import React, { Component } from 'react'
import styled from "styled-components";


const Tittle = styled.h1`
color: #000000;
font-size: 4rem;

`
const AddButton = styled.button`
width: 6vw;
border-radius: 40%;
height: 9vh;
font-size:3rem;
color: greenyellow;
background-color: green;
`
const MinButton = styled.button`
width: 6vw;
border-radius: 40%;
height: 9vh;
font-size:3rem;
color: red;
background-color: darkred;

`
const Container = styled.section `
width: 99.7%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border: solid red;

`
const ButtonContainer = styled.section`
width:50%;
height: 35vh;
display: flex;
justify-content: space-evenly;
align-items:center;

`
const Counter = styled.section`
width:30%;
height: 45vh;
border-radius: 25%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items:center;
background-color: #636363;

`

class App extends Component{

state = {
  num: 0
}
add = ()=>{
  if (this.state.num < 10 ) {
    this.setState({
      num: this.state.num + 1
    });
  }
};

remove = ()=>{
  if (this.state.num > 0){
    this.setState({
      num: this.state.num -1
    });
  }
};

  render() {
    return (
      <>
      <Container>
        <Counter>
        <Tittle>{this.state.num}</Tittle>
       
        <ButtonContainer>
        <AddButton onClick={this.add}> + </AddButton>
        <MinButton onClick={this.remove}> - </MinButton>
        </ButtonContainer> 
        </Counter>
      </Container>
      </>
    )
  }
}


export default App;

import React, { Component, Fragment} from 'react'
import Style from './App.module.css'
import { Typography, Grid } from '@material-ui/core';
import Card from './Components/Card/Card'
import Header from './Components/Header/Header'
import Save from './Components/Save/Save'
class App extends Component {

  state={
    Cards:[
      {username: 'saif boii', id: '12#lk',Descreptions: 'lorem ipsum dolar emmet'},
      {username: 'john doe', id: '44#ii',Descreptions: 'lorem ipsum dolar emmet'},
      {username: 'dark man', id: '98@56',Descreptions: 'lorem ipsum dolar emmet'}
    ],
    NewPost : false,
    OnEdit : false,
    disabled : false,
    username : '',
    id : '',
    Descreptions : ''
  }
  NewPostHandler = () =>{
  this.setState({
    NewPost : true,
    username : '',
    id : '',
    Descreptions : '',
    disabled : false
  })
  }
  GoHomeHandler = () =>{
    this.setState({
      NewPost : false,
      OnEdit : '',
      username : '',
      id : '',
      Descreptions : '',
      disabled : false
    })
    }
  onDeleteCard = (c)=>{
    const cardFilter = this.state.Cards.filter(card => card.id !== c.id )
    this.setState({Cards : cardFilter})
  }

OnEditHandler = (Card)=>{
this.setState({
  OnEdit : true , username : Card.username, id : Card.id , Descreptions : Card.Descreptions,
  disabled : true
})
}
onChangeUpdate = (e)=>{
  this.setState({
    [e.target.name] : e.target.value
  })
}

onSaveHandler = ()=>{
  const {id,username,Descreptions} = this.state
  const Card = {id,username,Descreptions}
  const CardIndex = this.state.Cards.findIndex( c=> c.id === id ) 
  const cards = [...this.state.Cards];
  if(this.state.disabled === true){
    cards[CardIndex] = Card
  }else{
    cards.push(Card)
  }
  this.setState({
    Cards : cards
  })
  this.GoHomeHandler();
}
  render() {
    let Cards = this.state.Cards.map((c,index) => {
      return <Card 
              id={c.id} username={c.username} Descreptions={c.Descreptions}
              delet={this.onDeleteCard.bind(this,c)} key={index}
              Edit={this.OnEditHandler.bind(this,c)}
             />
    });

    let save = (
      <Save GoHome={this.GoHomeHandler} 
      id={this.state.id}
      username={this.state.username}
      Descreptions={this.state.Descreptions}
      Update={this.onChangeUpdate}
      disable={this.state.disabled}
      Onsave={this.onSaveHandler}
       />
    );

    return(
      <Fragment>
      <Header Newpost={this.NewPostHandler}/>
      <Grid container>
        <Grid sm={2} item></Grid>
        <Grid sm={8} item>
        {(this.state.NewPost || this.state.OnEdit )? save : Cards}
        </Grid>
        <Grid sm={2} item></Grid>
      </Grid>
      <Typography align='center' style={{marginTop:'50px'}}>
      Made with in sheryians
      </Typography>
      </Fragment>
    )
  }
}

export default App
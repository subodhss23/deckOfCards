import React, { Component } from 'react';
import axios from 'axios';
const API_BASE_URL = "https://deckofcardsapi.com/api/deck"

class Deck extends Component{
    constructor(props){
        super(props);
        this.state = { deck: null, drawn: []};
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount(){
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({deck: deck.data});
    }

    async getCard(){
        let deck_id = this.state.deck.deck_id;
        let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
        let cardRes = await axios.get("http://deckofcardsapi.com/api/deck/64a7kile9etm/draw/");
        console.log(cardRes.data);
        let card = cardRes.data.cards[0];
        //make requst using deck id

        //set state using new card info from
    }
   render(){
        return (
    <div>
        <h1>Card Dealer!</h1>
        <button onClick={this.getCard}>Get Card</button>
    </div>
        );
   }
}

export default Deck;
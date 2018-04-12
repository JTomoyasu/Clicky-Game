import React, { Component } from 'react';
import './App.css';
import friends from "./utils/images.json";
import CharCard from "./components/CharCard";
import Counter from "./components/Counter"
import Wrapper from "./components/Wrapper/Wrapper"
class App extends Component {
  state = {
    friends,
    highscore:0,
    score:0,
    used:[]
  };
  render() {
    return (
      <Wrapper>
        <Counter
          score={this.state.score}
          highscore={this.state.highscore}
        />
        {this.state.friends.map(friend => (
          <CharCard
            shuffle={this.shuffle}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            scoreHandler={this.scoreHandler}
          />
        ))}
      </Wrapper>
    );
  }
  scoreHandler=(id)=>{
    if(this.state.used.includes(id)){
      this.setState({
        score:0,
        used:[]
      });
    }
    else{
      let newUsed=this.state.used;
      newUsed.push(id);
      let newScore=this.state.score;
      newScore++;
      this.setState({
        score:newScore,
        used:newUsed
      });
      if(this.state.score>this.state.highscore){
        let newHighScore=this.state.highscore;
        newHighScore++;
        this.setState({
          highscore:newHighScore
        });
      }
    }
  }
  shuffle = () => {
    let tempArr=this.state.friends;
    let currentIndex = tempArr.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = tempArr[currentIndex];
      tempArr[currentIndex] = tempArr[randomIndex];
      tempArr[randomIndex] = temporaryValue;
    }
    this.setState({
      friends: tempArr
    });
  }
}

export default App;

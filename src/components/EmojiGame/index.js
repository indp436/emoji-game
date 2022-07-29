/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import CreateNavBar from '../NavBar/index'
import CreateEmojiCard from '../EmojiCard/index'

const navBar = {
  imgUrl: 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png',
  alt: 'emoji logo',
}

const emojisIdList = []

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, list: emojisIdList}

  clickedOnEmoji = id => {
    const {list, score, topScore} = this.state

    if (list.includes(id)) {
      console.log('GAME OVER')
      if (score > topScore) {
        this.setState({topScore: score})
      }
    } else {
      this.setState(prevState => ({
        list: [...prevState.list, id],
        score: prevState.score + 1,
      }))
    }
  }

  render() {
    const {score, topScore, list} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    return (
      <div className="bg">
        <div className="game-container">
          <div className="nav-container">
            <CreateNavBar details={navBar} score={score} topScore={topScore} />
          </div>
          <div className="emoji-container">
            <ul className="emoji-inside-container">
              {shuffledEmojisList().map(each => (
                <CreateEmojiCard
                  details={each}
                  key={each.id}
                  onClicked={this.clickedOnEmoji}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame

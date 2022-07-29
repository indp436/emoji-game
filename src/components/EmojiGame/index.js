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

class EmojiGame extends Component {
  state = {score: 0, topScore: 0}

  render() {
    const {score, topScore} = this.state
    const {emojisList} = this.props

    return (
      <div className="bg">
        <div className="game-container">
          <div className="nav-container">
            <CreateNavBar details={navBar} score={score} topScore={topScore} />
          </div>
          <div className="emoji-container">
            <ul className="emoji-inside-container">
              {emojisList.map(each => (
                <CreateEmojiCard details={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame

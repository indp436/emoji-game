import './index.css'

const CreateEmojiCard = props => {
  const {details} = props
  const {emojiName, emojiUrl, id} = details

  return (
    <div className="emoji-box">
      <img src={emojiUrl} alt={emojiName} className="emoji-logo" />
    </div>
  )
}

export default CreateEmojiCard

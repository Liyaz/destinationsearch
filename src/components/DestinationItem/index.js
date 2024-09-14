// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem

  return (
    <li className="lists">
      <img src={imgUrl} alt={name} className="tours" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem

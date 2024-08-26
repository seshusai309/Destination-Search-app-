import './index.css'

const DestinationItem = props => {
  const {URL, name} = props
  return (
    <li className="list-item">
      <img className="img" alt={name} src={URL} />
      <p className="img-head">{name}</p>
    </li>
  )
}

export default DestinationItem

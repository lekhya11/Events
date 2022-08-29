import './index.css'

const EventItem = props => {
  const {eventDetails, updateEventId} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickImage = () => {
    updateEventId(id)
  }

  return (
    <>
      <li className="events-cards">
        <button type="button" className="button" onClick={onClickImage}>
          <img src={imageUrl} alt={name} className="image" />{' '}
        </button>
        <h3 className="heading">{name}</h3>
        <p className="location">{location}</p>
      </li>
    </>
  )
}

export default EventItem

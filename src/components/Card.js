
function Card(props) {
    return (
        <>
      <div className='pricecard col-lg-4 col-md-12 col-sm-12'>
        <h4>{props.details.title}</h4>
        <h2>
          ${props.details.price} <span className='text-muted'>/ month</span>
        </h2>
        {props.details.features.map((list) => {
          return <p>{list.content}</p>
        })}
        {props.details.button.map((btnData) => {
          return (
            <button className={btnData.btnEnable ? 'hover-eff-btn' : 'normal-eff-btn'}>{btnData.btnText}</button>
          )
        })}
      </div>
      </>
    )
  }
  
export default Card;
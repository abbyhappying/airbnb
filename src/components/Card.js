

export default function Card(props) {
    let cardBadge;
    if(props.openSpots===0) {
        cardBadge = "SOLD OUT";
    }
    else if (props.location==="Online") {
        cardBadge = "ONLINE";
    }

    console.log(props);
    return (
        <section className="card">
            {cardBadge && <div className='badge'>{cardBadge}</div>}
            <img className="card-img" src={`./images/${props.item.coverImg}`} alt="people" />
            <div id="title">
               <span>
                 <img src="./images/star.png" alt="star" className="star" />
                 <span>{props.item.stats.rating} </span>
                  <span className="grey">({props.item.stats.reviewCount}) * {props.item.location}</span>
                 </span>
            </div>
            <h2>Life lessons with katie zaferes</h2>
            <p><span className="bold">From ${props.item.price}</span> /person</p>

        </section>
    )
}

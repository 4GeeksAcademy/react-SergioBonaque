export const Card = ({cardTitle,cardBody,img}) => {


    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardBody}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}
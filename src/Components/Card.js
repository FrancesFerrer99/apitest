import React from "react"

function Card(props){
    return(
        <div className="container-image">
            <img src={props.source} alt=""/>
            <h1 className="image-author">{props.author}</h1>
            <h3 className="image-text"><strong>Views:</strong> {props.views}</h3>
            <h3 className="image-text"><strong>Downloads:</strong> {props.downloads}</h3>
        </div>
    )
}

export default Card;
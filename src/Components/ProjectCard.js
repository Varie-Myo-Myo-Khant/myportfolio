import {Col} from "react-bootstrap";

export const ProjectCard =({title,description,imgUrl,link})=>{
    return(
       <div className="pCard">
       <h3 className="pCardTitle">{title}</h3>
       <img className="pCardImage"src={imgUrl}/>
       <p className="pCardDescription">{description}</p>
       <a href={link} className="pButton" target="_blank">Show Details...</a>
       </div>
      
      
    )
}
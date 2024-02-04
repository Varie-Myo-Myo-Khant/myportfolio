import {Col} from "react-bootstrap";
import openicon from "../assets/img/tab.svg";
export const ProjectCard =({title,description,language,link})=>{
    return(
       <div className="pCard">
       <h3 className="pCardTitle">{title}</h3>
       <div className="pLanguageCode">
         {
             language.map((lang1,index)=>{
                        return(
                            
                            <code key={index} className="planguage">{lang1}.</code>
                        )
                    }
                    )
        }
       </div>
      
       <p className="pCardDescription">{description}</p>
       
      
       <a href={link} className="pButton" target="_blank">Check out the GitHub Repo <img src={openicon}/></a>
       </div>
      
      
    )
}
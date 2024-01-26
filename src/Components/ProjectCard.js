import {Col,Button,Card} from "react-bootstrap";

export const ProjectCard =({title,description,imgUrl})=>{
    return(
       
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
    )
}
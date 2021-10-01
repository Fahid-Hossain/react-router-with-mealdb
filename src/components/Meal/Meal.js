
import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';

const Meal = (props) => {
    const {strMeal,strArea,strMealThumb,idMeal}=props.meal;
    

    // onclick btn details of meal 
    const history =useHistory([])
    const clickHandlerDetails =()=>{
        history.push(`/meal/${idMeal}`)
    }
  
    return (
          <Col>
            <Card>
              <Card.Img variant="top" src={strMealThumb} className="w-50 m-auto" />
              <Card.Body>
                <Card.Title>{strMeal} {idMeal}</Card.Title>
                <p>{strArea}</p>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Link to={`/meal/${idMeal}`}>Meal Details</Link> <br />
                <button onClick={clickHandlerDetails}  className="btn-success">Meal Details btn</button>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default Meal;
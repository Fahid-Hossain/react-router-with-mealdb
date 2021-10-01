
import React from 'react';
import { Card, Col} from 'react-bootstrap';

const Meal = (props) => {
    const {strMeal,strArea,strMealThumb}=props.meal;
    return (
          <Col>
            <Card>
              <Card.Img variant="top" src={strMealThumb} className="w-50 m-auto" />
              <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <p>{strArea}</p>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              <button className="btn-secondary">food Details</button>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default Meal;
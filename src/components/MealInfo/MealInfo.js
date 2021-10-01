import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MealInfo = (props) => {
    const { strMeal, strArea, strCategory, strInstructions, strMealThumb } = props.mealInfo;

    // onclick handler
    const history = useHistory();
    const mealInfoClickHandler =()=>{
        history.push("/meals")
    }
    return (
        <Card className="m-auto" style={{ width: '33rem' }}>
            <Card.Img variant="top" src={strMealThumb} className="w-50 m-auto" />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <p>{strArea} Food</p>
                <h6>{strCategory} category</h6>
                <Card.Text>
                    {strInstructions.slice(0, 100)}
                </Card.Text>
                <Button onClick={mealInfoClickHandler} variant="primary">Go back All Meals</Button>
            </Card.Body>
        </Card>
    );
};

export default MealInfo;
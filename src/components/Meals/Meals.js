
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Meals = () => {
    // useState for search text 
    const [searchText,setSearchText]=useState("")
    // inputHandler for searching 
    const inputHandler = (event)=>{
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue);
    }

    //useState for meal data load
    const [meals,setMeals]=useState([]);
    
    //useEffect for fetch meals
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[searchText])

    return (
        <div>
            <h1>Welcome to our Resturant</h1>
            <InputGroup onChange={inputHandler} className="mb-3 w-50 m-auto border border-4" >
                <FormControl
                    placeholder="search your meal here..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
            </InputGroup>

            <Row xs={1} md={3} className="g-4 m-5">
                {
                    meals.map(meal=><Meal meal={meal} key={meal.idMeal}></Meal>)
                }
            </Row>

        </div>
    );
};

export default Meals;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import MealInfo from '../MealInfo/MealInfo';

const MealDetails = () => {
    const {MealId}=useParams();
    const [mealDetails,setMealDetails]= useState([]);

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>setMealDetails(data.meals))
    },[])



    return (
        <div>
            {
           mealDetails.map(mealInfo=><MealInfo mealInfo={mealInfo} key={mealInfo.idMeal}></MealInfo>)
            }
        </div>
    );
};

export default MealDetails;
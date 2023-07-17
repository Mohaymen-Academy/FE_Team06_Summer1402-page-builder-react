import React, { useState } from 'react';
import '../assets/styles/CategoryCard.scss'
import { makeStyles } from "@material-ui/core/styles";

const CategoryCard = (props) =>{
    return(
        <div className="category-describtion">
            <div className="imagepart">
                <img src={props.image} alt=''/>
            </div>
            <div className="textpart">
                {props.description}
            </div>
        </div>

    )
}
export default CategoryCard;
import React from "react";
import PropTypes, { number } from "prop-types";
import Button from "./Button";

const numbers = [7,8,9,4,5,6,1,2,3,0]

const renderButtons = onClickNumber => {
    //var number = 0
    //<Button text={number.toString()} clickHandler={onClickNumber} />

    const renderButton = number => (
        <Button 
            key={number} 
            text={number.toString()} 
            clickHandler={onClickNumber} /
        >
    )
    return numbers.map(renderButton)
}

const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        {/* <Button text="1" clickHandler={onClickNumber} />
        <Button text="2" clickHandler={onClickNumber} />
        <Button text="3" clickHandler={onClickNumber} />
        <Button text="4" clickHandler={onClickNumber} />
        <Button text="5" clickHandler={onClickNumber} />
        <Button text="6" clickHandler={onClickNumber} />
        <Button text="7" clickHandler={onClickNumber} />
        <Button text="8" clickHandler={onClickNumber} />
        <Button text="9" clickHandler={onClickNumber} />
        <Button text="10" clickHandler={onClickNumber} /> */}

        {
            renderButtons(onClickNumber)
        }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;
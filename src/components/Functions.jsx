import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import './Button'

const Functions = ({onContentClear, onDelete}) => {
    return(
        <section className="functions">
            <Button text="Clear" type="button-long-text"  clickHandler={onContentClear}/>
            <Button text="&larr;" clickHandler={onDelete}/>
        </section>
    )
    
}

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}


export default Functions
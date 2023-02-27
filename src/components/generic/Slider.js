import React from "react"
import { RANGE_PARAMS } from "../vars"

const Slider = ({ name, id, value, rangeParams, handleChange }) => {
    return (
        <div className="slider-container">
            <div className="label">
                <label htmlFor={id || name}>{name}</label>: <span>{value}</span>
            </div>
            <input
                type="range"
                id={id || name}
                min={rangeParams.minVal}
                max={rangeParams.maxVal}
                step={rangeParams.stepVal}
                value={value}
                onChange={e => handleChange(name, e.target.value)}
                className="slider"
            />
        </div>
    )
}

const sliderList = ({ names, values, handleChange, rangeParams }) => {
    return names.map(name => (
        <Slider
            key={name}
            name={name}
            rangeParams={rangeParams ? rangeParams[name] : RANGE_PARAMS[name]}
            handleChange={handleChange}
            value={values[name]}
        />
    ))
}

export { Slider, sliderList }

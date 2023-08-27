import React from 'react'

const Button = (props) => {
    const { name } = props;

    return (
        <div>
            <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg font-bold'>{name}</button>
        </div>
    )
}

export default Button

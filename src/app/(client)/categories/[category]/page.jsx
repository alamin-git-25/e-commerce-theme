import React from 'react'

export default function page({ params }) {
    const category = decodeURIComponent(params.category);
    return (
        <div>{params.category}
            {category === "Gaming Consoles" ? <p>Yes</p> : <p>No</p>}
        </div>
    )
}

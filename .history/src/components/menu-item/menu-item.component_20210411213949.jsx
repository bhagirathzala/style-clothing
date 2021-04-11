import React from 'react'

export default function MenuItem({title, image, size}) {
    return (
        <div className={`${size} menu-item`}>
            <div className="content">
                <h1 className="title">${title}.toUpperCase()</h1>
            </div>
        </div>
    )
}

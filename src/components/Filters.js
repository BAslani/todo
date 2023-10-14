import React from 'react'

const Filters = () => {
    return (
        <ul>
            <li>
                <button type="button" className="sidebar-btn">All</button>
            </li>
            <li>
                <button type="button" className="sidebar-btn">Events</button>
            </li>
            <li>
                <button type="button" className="sidebar-btn">Work</button>
            </li>
            <li>
                <button type="button" className="sidebar-btn">Educations</button>
            </li>
            <li>
                <button type="button" className="sidebar-btn">Chores</button>
            </li>
        </ul>
    )
}

export default Filters
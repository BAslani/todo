import React from 'react'
import { useGlobal } from '../context/context'

const Filters = () => {
    const { handleFilter } = useGlobal();
    return (
        <ul>
            <li>
                <button
                    type="button"
                    className="sidebar-btn"
                    name='all'
                    onClick={(e) => handleFilter(e)}
                >All</button>
            </li>
            <li>
                <button
                    type="button"
                    className="sidebar-btn"
                    name='event'
                    onClick={(e) => handleFilter(e)}
                >Events</button>
            </li>
            <li>
                <button
                    type="button"
                    className="sidebar-btn"
                    name='work'
                    onClick={(e) => handleFilter(e)}
                >Work</button>
            </li>
            <li>
                <button
                    type="button"
                    className="sidebar-btn"
                    name='education'
                    onClick={(e) => handleFilter(e)}
                >Educations</button>
            </li>
            <li>
                <button
                    type="button"
                    className="sidebar-btn"
                    name='chores'
                    onClick={(e) => handleFilter(e)}
                >Chores</button>
            </li>
        </ul>
    )
}

export default Filters
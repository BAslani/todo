import React, { useState, useEffect } from 'react';
import mockData from './mockData';

const todoContext = React.createContext();

const TodoProvider = ({ children }) => {
    const [tasks, setTasks] = useState(mockData)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return <todoContext.Provider value={{
        tasks,
        isSidebarOpen,
        setIsSidebarOpen
    }}>
        {children}
    </todoContext.Provider>
}

const useGlobal = () => React.useContext(todoContext);

export { TodoProvider, useGlobal };
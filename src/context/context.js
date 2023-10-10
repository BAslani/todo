import React, { useState } from 'react';
import mockData from './mockData';

const todoContext = React.createContext();

const TodoProvider = ({ children }) => {
    const [tasks, setTasks] = useState(mockData)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [user, setUser] = useState({
        id: null,
        username: '',
        tasks: []
    })

    return <todoContext.Provider value={{
        tasks,
        isSidebarOpen,
        setIsSidebarOpen,
        isModalOpen,
        setIsModalOpen,
        user,
        setUser
    }}>
        {children}
    </todoContext.Provider>
}

const useGlobal = () => React.useContext(todoContext);

export { TodoProvider, useGlobal };
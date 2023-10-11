import React, { useEffect, useState } from 'react';
import mockData from './mockData';

const todoContext = React.createContext();

const TodoProvider = ({ children }) => {
    const [tasks, setTasks] = useState(mockData)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [user, setUser] = useState(() => {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : { id: null, username: '', tasks: [] };
    });
    const [taskInfo, setTaskInfo] = useState({
        desc: '',
        date: '',
        type: ''
    })

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:5000/addTask", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...taskInfo,
                    id: user.id
                })
            });
            const data = await response.json()
            if (response.status === 200) {
                alert(data.message)
            }
        } catch (error) {
            console.log('error:', error);
        }
    }
    // const fetchData = async () => {
    //     try {
    //         const response = fetch("http://127.0.0.1:5000/tasks", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(user.id)
    //         })

    //         const data = (await response).json();
    //         if (response.status === 200) {
    //             setUser({
    //                 ...user,
    //                 tasks: data.tasks
    //             })
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     fetchData()
    // },[])

    return <todoContext.Provider value={{
        tasks,
        isSidebarOpen,
        setIsSidebarOpen,
        isModalOpen,
        setIsModalOpen,
        user,
        setUser,
        handleAddTask,
        taskInfo,
        setTaskInfo
    }}>
        {children}
    </todoContext.Provider>
}

const useGlobal = () => React.useContext(todoContext);

export { TodoProvider, useGlobal };
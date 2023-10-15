import React, { useCallback, useEffect, useState } from 'react';

const todoContext = React.createContext();

const TodoProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [user, setUser] = useState(() => {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : { id: null, username: '' };
    });
    const [taskInfo, setTaskInfo] = useState({
        desc: '',
        date: '',
        type: ''
    })
    const [filteredTasks, setFilteredTasks] = useState([])

    useEffect(() => {
        setFilteredTasks(tasks)
      }, [tasks])

    // Adding tasks functionallity
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

            if (response.status === 200) {
                setIsModalOpen(false)
            }
        } catch (error) {
            console.log('error:', error);
        }
    }

    // fetching tasks from the server
    const fetchData = useCallback(async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: user.id })
            })
            const data = await response.json();
            if (response.status === 200) {
                setTasks(data.tasks)
            }
        } catch (error) {
            console.log(error);
        }
    }, [isModalOpen])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    // changing tasks state
    const handleTaskState = async (id, idx, state) => {
        try {
            const response = await fetch("http://127.0.0.1:5000/taskState", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: id, idx: idx, state: state })
            })
            if (response.status === 200) {
                setTasks(tasks.map(task => {
                    if (task.id === id && task.idx === idx) {
                        if (task.state === 'todo') {
                            task.state = 'done'
                        } else {
                            task.state = 'todo'
                        }
                        return task
                    }
                    return task
                }))
            }
        } catch (error) {
            console.log(error);
        }
    }


    // filtering tasks
    const handleFilter = (e) => {
        setIsSidebarOpen(false)
        const category = e.target.name;
        if (category === 'all') {
            setFilteredTasks(tasks)
        } else {
            const newTasks = tasks.filter((task) => task.type === category)
            setFilteredTasks(newTasks)
        }
    }

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
        setTaskInfo,
        handleTaskState,
        filteredTasks,
        handleFilter
    }}>
        {children}
    </todoContext.Provider>
}

const useGlobal = () => React.useContext(todoContext);

export { TodoProvider, useGlobal };
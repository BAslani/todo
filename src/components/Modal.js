import styled from "styled-components";
import { useGlobal } from "../context/context";

const Modal = () => {
    const { setIsModalOpen, handleAddTask, taskInfo, setTaskInfo } = useGlobal();
    return (
        <Wrapper>
            <div className='modal'>
                <form onSubmit={handleAddTask}>
                    <input
                    type="text"
                    name="desc"
                    placeholder='Task'
                    value={taskInfo.desc}
                    onChange={(e)=>setTaskInfo({...taskInfo, desc: e.target.value})}
                    />
                    <input
                    type="date"
                    name="date"
                    value={taskInfo.date}
                    onChange={(e)=>setTaskInfo({...taskInfo, date: e.target.value})}
                    />
                    <select
                    name="type"
                    defaultValue="title"
                    onChange={(e)=>setTaskInfo({...taskInfo, type: e.target.value})}
                    >
                        <option disabled value="title">Type</option>
                        <option value="event">Event</option>
                        <option value="work">Work</option>
                        <option value="education">Education</option>
                        <option value="chores">Chores</option>
                    </select>
                    <div className='btn-container'>
                        <button
                            type='submit'
                            className='btn confirm-btn'
                        >
                            confirm
                        </button>
                        <button
                            type='button'
                            className='btn clear-btn'
                            onClick={() => setIsModalOpen(false)}
                        >
                            cancel
                        </button>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.7);
z-index: 10;
display: flex;
align-items: center;
justify-content: center;

.modal {
background: var(--clr-white);
width: 80vw;
max-width: 400px;
border-radius: var(--radius);
padding: 2rem 1rem;
text-align: center;
}
.modal h4 {
margin-bottom: 0;
line-height: 1.5;
}
.modal .clear-btn,
.modal .confirm-btn {
  margin-top: 1rem;
}
.btn-container {
  display: flex;
  justify-content: space-around;
}
form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
input,
select {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
}
`

export default Modal;

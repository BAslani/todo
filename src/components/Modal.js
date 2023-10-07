import styled from "styled-components";
import { useGlobal } from "../context/context";

const Modal = () => {
    const { setIsModalOpen } = useGlobal();
    return (
        <Wrapper>
            <div className='modal'>
                <h4>Modal</h4>
                <div className='btn-container'>
                    <button
                        type='button'
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
`

export default Modal;

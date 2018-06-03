import React from 'react';

const ButtonChangeName = ({changeName}) => {
        return (
            <div>
                <button onClick={changeName}>Cambiar de nombre</button>
            </div>
        );
}

export default ButtonChangeName;
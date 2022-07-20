import React, {ChangeEvent} from 'react';

type InputType = {
    title: string
    setTitle: (title: string) => void
}

export const Input: React.FC<InputType> = ({title, setTitle}) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
        </div>
    );
};
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setinputValue] = useState('');
  const onInputChange = ({ target }) => {
    // console.log(event.target.value);
    // setinputValue(event.target.value);
    setinputValue(target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <=1) return;

    // setcategories(categories => [inputValue, ...categories]);
    setinputValue('');
    onNewCategory(inputValue.trim()); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        // onChange={(event) => onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};

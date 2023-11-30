import { useState } from "react";
import styled from "styled-components";

console.dir(styled);

const StyledButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  
  // propsを受け取って条件分岐
  background: ${({isSelected}) => isSelected ? 'pink' : ''};

  // メディアクエリ
  @media (max-width:  600px) {
    border-radius: 0;
  }
`;

const OrangeButton = styled(StyledButton)`
  background: orange;

  :hover {
    color: red;
    opacity: 0.7;
  }

  span {
    font-size: 2em;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>スタイルボタン</StyledButton>
      <OrangeButton isSelected={isSelected} onClick={clickHandler}>
        <span>スタイルボタン</span>
      </OrangeButton>
      <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;

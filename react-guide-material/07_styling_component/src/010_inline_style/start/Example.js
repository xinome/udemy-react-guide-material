import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    const style = {
        width: 120,
        height: 60,
        display: "block",
        fontWeight: "bold",     // font-weight -> fontWeight
        "border-radius":  9999,     // border-radius -> "border-radius"
        cursor: "pointer",
        border: "none",
        margin: "auto",

        // 条件によってスタイルを変更する
        background: isSelected ? "pink" : "",
    };

    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>
            <div style={{
                textAlign: "center",
            }}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;

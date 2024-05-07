import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) => {
    return (
        <div>
            Color in child: {color}
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}

// Define as function component to let TS know what it is
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return (
        <div>
            Color in react child: {color}
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}
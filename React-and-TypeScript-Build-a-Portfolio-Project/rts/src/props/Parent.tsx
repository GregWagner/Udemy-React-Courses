import {Child, ChildAsFC} from "./Child.tsx";

const Parent = () => {
    return (
        <div>
            <Child
                color={'red'}
                onClick={() => console.log('Click')} />
            <ChildAsFC
                color={'blue'}
                onClick={() => console.log('Click')} />
        </div>
    )
}

export default Parent;
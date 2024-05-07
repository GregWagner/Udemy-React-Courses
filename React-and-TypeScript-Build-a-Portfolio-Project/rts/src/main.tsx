import ReactDOM from "react-dom";
// import Parent from "./props/Parent.tsx";
// import GuestList from "./state/GuestList.tsx";
import UserSearch from "./state/UserSearch.tsx";

const App = () => {
    return <div>
        <h1>Hi There!</h1>
        {<UserSearch />}
        {/*<GuestList />*/}
        {/*<Parent />*/}
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
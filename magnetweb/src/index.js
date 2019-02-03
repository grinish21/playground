import React from "react";
import ReactDOM from "react-dom";
import StudentList from "./studentList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

function App() {
    return (
        <div className="App">
            <StudentList />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

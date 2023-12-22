import React from "react";
import { Provider } from "react-redux";
import store from "..";

interface Prop {
    children: React.ReactNode
}

const ProviderComponent: React.FC<Prop> = ({ children }) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default ProviderComponent;
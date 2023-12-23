"use client"

import { AppDispatch, RootState } from "@/redux-store";
import { fetchUsers } from "@/redux-store/thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Test() {
    const dispatch= useDispatch<AppDispatch>();
    const { UsersResults } = useSelector((state: RootState)=>state);

    useEffect(() => {
        console.log(UsersResults.loading);
    }, [UsersResults.loading]);

    useEffect(() => {
        dispatch(fetchUsers({q: "fabiconcept"}));
    }, [dispatch]);

    return (
        <div>
            <button type="button" title="click here">Click</button>
        </div>
    );
}
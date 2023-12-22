"use client"
// import { initiateRepositories, initiateUsers } from "@/redux-store/slices";
import { useDispatch } from "react-redux";

export default function Test() {
    const dispatch = useDispatch();

    return (
        <div>
            <button type="button" title="click here" /*onClick={()=>dispatch(getUsersThunk({q: "fabiconcept"}))}*/>Click</button>
        </div>
    );
}
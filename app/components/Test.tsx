"use client"

import { getRepositories } from "@/lib/TestOctokit";
import { useEffect } from "react";
export default function Test() {
    useEffect(() => {
        async function logOut() {
            const response = await getRepositories({ q: "fabiconcept" });
             console.log(response)
        }

        logOut();

    }, []);

    return (
        <div></div>
    );
}
"use client"

import { authToken, octokit, testRun } from "@/lib/TestOctokit";
import { useEffect } from "react";
export default function Test() {
    useEffect(() => {
        async function logOut() {
             const response = await testRun();
             console.log(response)
        }

        logOut();

    }, []);

    return (
        <div>Test</div>
    );
}
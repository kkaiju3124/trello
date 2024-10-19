'use client';
import { useRouter } from "next/navigation";
import { login } from "@/app/backend_fake/be";
import React, { useState } from 'react';
function pageLogin() {
    const router = useRouter();
    const [state, setState] = useState({
        username: "",
        password: "",
    });

    const handleLogin = () => {
        const { username, password } = state;
        const res = login(username, password);
        if (res.success) {
            localStorage.setItem("token", res.token);
            router.push("/");
        } else {
            console.log("Login failed");
        }
        // if (username === "user1" && password === "123456") {
        //   router.push("./");
        // } else console.log("Login failed");
    };
    return (
        <div className="flex h-screen w-screen items-center justify-center flex-col gap-4">
            <div className="">
                <p className="text-black">UserName</p>
                <input
                    onInput={(e) => {
                        setState({ ...state, username: e.target.value });
                    }}
                    type="text"
                    className="text-black"
                />
            </div>
            <div>
                <p className="text-black">Password</p>
                <input
                    onInput={(e) => {
                        setState({ ...state, password: e.target.value });
                    }}
                    type="password"
                    className="text-black"
                />
            </div>
            <button
                className="text-black bg-green-300  p-3 rounded-md my-2"
                onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default pageLogin
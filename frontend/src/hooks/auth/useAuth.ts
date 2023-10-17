import { Axios } from "@root/lib/axios/axios"
import {cookies} from "next/headers"

import type { ISignIn, ISignUp } from "./types"

export function useAuth() {
    async function signIn({username, password}: ISignIn) {
        "use server";
        return Axios<string>({
            method: "POST",
            url: "/auth/local/sign-in",
            data: {
                username,
                password,
            }
        }).then((session) => {
            cookies().set({
                name: "sessionId",
                value: session,
                path: "/",
            })
        });
    }

    async function signUp({username, email, password}: ISignUp) {
        "use server";
        return Axios<string>({
            method: "POST",
            url: "/auth/local/sign-up",
            data: {
                username,
                email,
                password,
            }
        }).then((session) => {
            cookies().set({
                name: "sessionId",
                value: session,
                path: "/",
            })
        });
    }

    return {
        signIn, 
        signUp
    }
}
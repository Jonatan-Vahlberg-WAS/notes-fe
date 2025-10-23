//TODO: Implement user context

import { createContext, useContext, useState, type PropsWithChildren } from "react";

type UserState = {
    user: UserProfile | null;
    actions: {
        signin: (email: string, password: string) => Promise<void>,
        //TODO REGISTER
        //TODO LOGOUT
    }
}

const defaultState: UserState = {
    user: null,
    actions: {
        signin: () => Promise.resolve()
    }
}

const UserContext = createContext(defaultState)

function UserProvider ({children}: PropsWithChildren) {
    const [user, setUser] = useState(defaultState.user)

    //TODO: get user through auth service on load

    const signin: typeof defaultState.actions.signin = async (email, password) => {
        //TODO Move signin code here
        //TODO: get user through auth service 
    }

    return (
        <UserContext.Provider value={{
            user,
            actions: {
                signin
            }
        }}>
            {children}
        </UserContext.Provider>
    )
}

function useUser() {
    return useContext(UserContext)
}

export {
    UserProvider,
    useUser
}
import React from 'react';

const userInfoReducer = (prev, newValue) => {
    if (!newValue) {
        return null
    }
    return newValue;
}

const MainContext = React.createContext({});
const MainContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = React.useReducer(userInfoReducer, {});// .parse = transforma userInfo em objeto novamente
    const [isAdmin, setAdmin] = React.useState(false)
    
    React.useEffect(() => {
        if (userInfo && userInfo.token) {
            setAdmin(true)
        } else {
            setAdmin(false)
        }
    }, [userInfo])
    
    return (
        <MainContext.Provider value={{userInfo, isAdmin, setUserInfo}}>
        {children}
        </MainContext.Provider>
        )
}
export {MainContext, MainContextProvider}
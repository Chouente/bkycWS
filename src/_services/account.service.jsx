const saveToken = (token) => {
    localStorage.setItem('token', token)
}

const logout = () => {
    localStorage.removeItem('token')
}

const isLogget = () => {
    const token = localStorage.getItem('token')
    return !!token
}


export const accountService = {
    saveToken, logout, isLogget
}
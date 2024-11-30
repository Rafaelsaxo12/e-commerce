
const bearerToken = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            authorization: `Bearer ${token}`,
        }
    }
}

export default bearerToken;

const ApiUrl = process.env.REACT_APP_API_URL;

export const sendMessage = (data) => {
    
    fetch(`${ApiUrl}/send-message`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export const sendContactMail = (contactInfo) => {
  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: contactInfo.name,
      email: contactInfo.email,
      message: contactInfo.message
    })
  };
  return fetch('http://localhost:3000/api/v1/create', init)
    .then(response => {
      if (response.status === 204) {
        return true;
      }
    })
    .catch(error => console.log(error.message));
}
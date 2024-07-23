import axios from "axios";

// ОТПРАВЛЯЕМ КОММЕНТАРИЙ
export function postQuestion( name, location, text, email ) {
    axios.post("http://localhost:4000/users/send-question", {
        inputData: {
            name: name,
            location: location,
            text: text,
            email: email,
        }
    }).then(res => {
        console.log("http://localhost:4000/users/send-question - good")
    })
        .catch(err => {
            console.log("http://localhost:4000/users/send-question - ", err)
        })
}

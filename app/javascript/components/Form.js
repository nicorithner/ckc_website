import React from 'react'
class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
            error: "",
            success: ""   
        }
    }
    validateSubmitted=() => {
        if(!this.state.name){
            this.setState({error: "Name cannot be left blank."})
        } else if(!this.state.email){
            this.setState({error: "Email cannot be left blank."})
        } else if(!this.state.message){
            this.setState({ error: "Message cannot be left blank."})
        } else {
            this.setState({success: "Thank you for contacting us!"})
        }
    }
    render() {
        return(
            <div id="contact">
                {this.state.error && <h2>{this.state.error}</h2>}
                {this.state.success && <h2>{this.state.success}</h2>}
                <label htmlFor="email"> Email </label>
                <input type="email" placeholder="enter email address" name="email" />
                <label htmlFor="name"> Name </label>
                <input type="text" placeholder="enter name" name="name" />
                <label htmlFor="message"> Message </label>
                <textarea placeholder="enter your message here" name="message" rows="4" />
                <button type="button" onClick={this.validateSubmitted}>Submit </button>

            </div>
        )
    }
}
export default Form
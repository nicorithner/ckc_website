import React from 'react';
import './form.css';

import { sendContactMail } from '../../utils/apiCalls';
class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			message: '',
			error: '',
			success: '',
		};
	}

	validateSubmitted = () => {
		if (!this.state.name) {
			this.setState({ error: 'Name cannot be left blank.' });
		} else if (!this.state.email) {
			this.setState({ error: 'Email cannot be left blank.' });
		} else if (!this.state.message) {
			this.setState({ error: 'Message cannot be left blank.' });
		} else {
            const contactInfo = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }
            sendContactMail(contactInfo)
                .then(response => {
                    if (response) {
                        this.setState({ success: "Thank you for contacting us!" })
                    } else {
                        this.setState({ error: 'Something went wrong sending the email message' });
                    }
                });
			this.clearInputs();
		}
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	clearInputs = () => {
		this.setState({
			name: '',
			email: '',
			message: '',
		});
	};

	render() {
		return (
			<div className='container'>
				{this.state.error && <h2>{this.state.error}</h2>}
				{this.state.success && <h2>{this.state.success}</h2>}

				<h1>Contact Us</h1>

				<label htmlFor='name'> Name </label>
				<br />
				<input
					type='text'
					placeholder='enter name'
					name='name'
					value={this.state.name}
					onChange={this.handleChange}
				/>

				<label htmlFor='email'> Email </label>
				<br />
				<input
					type='email'
					placeholder='enter email address'
					name='email'
					value={this.state.email}
					onChange={this.handleChange}
				/>

				<label htmlFor='message'> Message </label>
				<br />
				<textarea
					placeholder='enter your message here'
					name='message'
					rows='4'
					value={this.state.message}
					onChange={this.handleChange}
				/>

				<button type='button' onClick={this.validateSubmitted}>
					Submit{' '}
				</button>
			</div>
		);
	}
}
export default Form;

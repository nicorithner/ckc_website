import React from 'react'

class App extends React.Component {
				render () {
						return (
										<div id="contact">
											<label htmlFor="email"> Email </label>
											<input type="email" placeholder="enter email address" name="email" />	
											<label htmlFor="name"> Name </label>
											<input type="text" placeholder="enter name" name="name"/>	
											<label htmlFor="message"> Message </label>
											<textarea placeholder="enter your message here" name="message" rows="4" />	
											<button type="button">Submit </button>

										</div>
						)
				}
}

export default App

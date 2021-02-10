import React from 'react';

import Header from './Header/Header';
import Form from './Form/Form.js';

import './app.scss';

class App extends React.Component {
	render() {
		return (
			<section>
				<section className='page-container'>
					<Header />
					<Form />
				</section>
			</section>
		);
	}
}

export default App;

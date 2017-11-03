import React, { Component } from 'react';
import TinInfo from './tininfo';
import axios from 'axios'

export default class ManageTins extends Component {
	constructor() {
		super();
		this.state = {
			tininfo: {},
			tinval: '',
			hasinfo: false
		};
	}

	handleClick = () => {
		let t = this.state.tinval;
		console.log('click ' + t);
		if (t.length !== 9) {
			alert('please enter a valid tin');
		}
		else {
			axios.get('external/api/tin_detail.json')
				.then(resp => { console.log(JSON.stringify(resp, null, 2)); this.setState({ tininfo: resp.data.tininfo, hasinfo: true }) });
		}
	};
	handleChange = e => this.setState({ tinval: e.target.value });
	handleDelete = () => axios.get('external/api/tin_delete_resp.json').then(resp => {
		if (resp.data.status.result) {
			this.displaySuccess();
			this.setState({ tinval: '', hasinfo: false });
		}
		else {
			this.displayError();
		}
	});
	displaySuccess = () => { alert('sucess'); }
	displayError = () => { alert('error'); }


	render() {
		return (
			<div>
				<h3>Detach TIN from all Orgs</h3>
				<label>Tin to detach</label>
				<input type='text' className='tin_input' value={this.state.tinval} onChange={this.handleChange} />
				<input type='button' className='tin_button' value='search' onClick={this.handleClick} />
				<br />
				{this.state.hasinfo ? <TinInfo
					FEIN={this.state.tininfo.FEIN}
					orgs={this.state.tininfo.orgs}
					cb={this.handleDelete} />
					:
					<p>No tininfo</p>
				}
			</div>
		);
	}

}

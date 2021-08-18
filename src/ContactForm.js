import React from "react";
import './ContactForm.css'

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            email:'',
            lastName: '',
            country: ''
        };

        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log('Change detected. State updated' + name + ' = ' + value);
    }

    handleSubmit(event) {
        alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="nameInput">First Name: </label>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} className="form-control" id="nameInput" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastNameInput">Last Name: </label>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}
                               className="form-control" id="lastNameInput" placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email: </label>
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailInput" placeholder="email@domain.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="countryInput">Country: </label>
                        <select value={this.state.country} onChange={this.handleChange}>
                            <option value="india">India</option>
                            <option value="germany">Germany</option>
                            <option value="uk">UK</option>
                            <option value="us">US</option>

                        </select>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

export default ContactForm;

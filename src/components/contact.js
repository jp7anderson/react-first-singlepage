import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            fieldErrors: {},
            people: []
        };
    }
    onInputChange(evt) {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({ fields });
    }
    onFormSubmit(evt) {
        const people = [
            ...this.state.people,
            this.state.fields
        ];
        this.setState({ people, fields: {} });
        evt.preventDefault();
    }
    render() {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h2>Form Contact</h2>
                    <form onSubmit={this.onFormSubmit.bind(this)}>
                        <input
                            placeholder='Name'
                            name='name'
                            value={this.state.fields.name}
                            onChange={this.onInputChange.bind(this)}
                        />

                        <input
                            placeholder='Email'
                            name='email'
                            value={this.state.fields.email}
                            onChange={this.onInputChange.bind(this)}
                        />
                        <input type='submit' />
                    </form>
                    { this.state.people.length ?
                        <div>
                            <h3>People</h3>
                            <ul>
                                { this.state.people.map(({ name, email }, i) =>
                                    <li key={i}>{name} ({ email })</li>
                                ) }
                            </ul>
                        </div>
                      : ''
                    }
                </div>
            </div>
        );
    }
}

export default Contact;

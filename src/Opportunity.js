import React, { Component } from 'react'
import './Opportunity.css'

class Opportunity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formClasses: 'contributors hide',
            buttonClasses: 'button',
            deleteButtonClass: 'button hide'
        }
    }

    componentDidMount(){
         if(this.props.firebase.auth().currentUser.email.replace('.', '') === this.props.opp.userEmail){
             this.setState({deleteButtonClass: 'button'})
         }
    }
    reward(ev) {
        const emails = ev.target.contributors.value.split('\n');
        const valid = [];
        const invalid = [];
        const credits = [];

        //validate emails
        emails.map(e => {
            const email = e.replace('.', '')
            this.props.firebase.database().ref('users').on('value', (snapshot) => {
                if(snapshot.hasChild(email)) {
                    valid.push(email);
                    this.props.firebase.database().ref('users'+email).on('value', (snapshot) => {
                        credits.push(snapshot.val().credits);
                    })
                } else {
                    invalid.push(email);
                }
         })
        })
        console.log('Invalid e-mails: '+ invalid.toString())
        const amountPerPerson = parseInt(50/valid.length);
        valid.map((email, i) => {
            this.props.addNote(amountPerPerson, email, credits[i])
        })

        this.setState({
            formClasses: 'contributor hide',
            buttonClasses: 'button hide',
        })
    }

    handleClick() {
        if(this.props.firebase.auth().currentUser.email.replace('.', '') === this.props.opp.userEmail) {
            this.setState({
                formClasses: 'contributors',
                buttonClasses: 'button hide',
            })
        } else {
            console.log(this.props.opp.userEmail);
            console.log(this.props.firebase.auth().currentUser.email.replace('.', ''));
            alert('Only the creater of the event may reward participants!');
        }
    }
    
    render() {
        return (
            <li className="opportunity">
                <p className="opp-li">Title: {this.props.opp.title}</p>
                <p className="opp-li">Description: {this.props.opp.desc}</p>
                <p className="opp-li">Location: {this.props.opp.location}</p>
                <p className="opp-li">Date: {this.props.opp.date}</p>
                <p className="opp-li">Time: {this.props.opp.time}</p>
                <p className="opp-li">Contact Information: {this.props.opp.contact}</p>
                <form className={this.state.formClasses} onSubmit={this.reward.bind(this)}>
                    <textarea name="contributors" 
                        type="text" 
                        placeholder="Enter the e-mails of the people who volunteered. Put a separate e-mail on each line."
                        autoFocus
                    ></textarea>
                    <button type="submit" className="button">Submit</button>
                </form>
                <button type="button" className={this.state.buttonClasses} onClick={this.handleClick.bind(this)}>Reward participants</button>
                <button type="button" className={this.state.deleteButtonClass} onClick={() => this.props.delete(this.props.opp.title)}>Delete</button>
            </li>
     )
    }
}

export default Opportunity
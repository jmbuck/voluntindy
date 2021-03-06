import React, {Component} from 'react'
import Opportunity from './Opportunity'
import './Opportunities.css'

class Opportunities extends Component {
    constructor(props) {
        super(props)

        this.state = {
            opportunities: [] 
        }
    }

    componentDidMount(){
         let opps = [];
         this.props.firebase.database().ref('opportunities').on('value', (snapshot) => {
            if(snapshot.val() != null) {
                this.setState({opportunities: snapshot.val().opportunities})
            }
         })
    }

    remove(title){
        
        let opportunities = [...this.state.opportunities]
        for(let i = 0; i<this.state.opportunities.length; i++){
            if(title === opportunities[i].title){
                opportunities.splice(i-1, 1)
                this.setState({opportunities})
                this.props.firebase.database().ref("opportunities/").set({
                    opportunities: opportunities
                });
            }
        }
    }

    add(ev){
        ev.preventDefault()
        const form = ev.currentTarget
        const title = form.title.value
        const desc = form.desc.value
        const skills=form.skills.value
        const location = form.location.value
        const date = form.date.value
        const time = form.time.value
        const contact = form.contact.value
        const id = Date.now()
        const userEmail = this.props.firebase.auth().currentUser.email.replace('.', '')
        const opp = {title, desc, location, date, time, contact, id, userEmail}
        const opportunities = [...this.state.opportunities]
        console.log(opportunities)
        opportunities.unshift(opp)
        this.setState({opportunities})
                this.props.firebase.database().ref('opportunities').update({
            opportunities
        });
    }
    
    
    render () {
        return (
            <div>
                <form onSubmit={this.add.bind(this)}>
                    <input name="title" type="text" placeholder="Title" />
                    <textarea name="desc" type="text" placeholder="Description" ></textarea>
                    <input name="skills" type="text" placeholder="Skills Needed" />
                    <input name="location" type="text" placeholder="Location" />
                    <input name="date" type="date" placeholder="Date" />
                    <input name="time" type="text" placeholder="Time" />
                    <input name="contact" type="text" placeholder="Contact Information" />
                    <button className="opportunity-button" type="submit">Add</button>
                </form>
                <ul className="Opportunities no-bullet">
                    {this.state.opportunities.map((opp, i) => <Opportunity key={i} opp={opp} firebase={this.props.firebase} delete={this.remove.bind(this)}/>)}
                </ul>
            </div>
        )
    }
}

export default Opportunities
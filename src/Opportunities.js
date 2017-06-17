import React, {Component} from 'react'
import Opportunity from './Opportunity'
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

    add(ev){
        ev.preventDefault()
        debugger;
        const form = ev.currentTarget
        const title = form.title.value
        const desc = form.desc.value
        const location = form.location.value
        const date = form.date.value
        const time = form.time.value
        const contact = form.contact.value
        const id = Date.now()
        const opp = {title, desc, location, date, time, contact, id}
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
                    <input name="location" type="text" placeholder="Location" />
                    <input name="date" type="date" placeholder="Date" />
                    <input name="time" type="text" placeholder="Time" />
                    <input name="contact" type="text" placeholder="Contact Information" />
                    <button type="submit">Add</button>
                <ul className="Opportunities">
                    {this.state.opportunities.map((opp, i) => <Opportunity key={i} opp={opp}/>)}
                </ul>
                </form>
            </div>
        )
    }
}

export default Opportunities
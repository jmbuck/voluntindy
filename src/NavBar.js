import React, {Component} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import UserSiteInfo from './UserSiteInfo'
import './NavBar.css'
import UserAuthentication from './UserAuthentication'
import Account from './Account'
import Opportunities from './Opportunities'
import Rewards from './Reward'
import Donate from './Donate'

class NavBar extends Component{
    constructor(){
        super()
        this.state = {
            titleClasses: ["tabs-title is-active", "tabs-title", "tabs-title", "tabs-title", "tabs-title", "tabs-title"],
            panelClasses: ["tabs-panel is-active", "tabs-panel", "tabs-panel", "tabs-panel", "tabs-panel", "tabs-panel"],
            titleSelected: ["true", "false", "false", "false", "false", "false"]
        }
    }

    componentDidMount() {
        this.props.firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in
                this.props.firebase.database().ref('users/'+this.props.firebase.auth().currentUser.email.replace('.', '')).on('value', (snapshot) => {this.credits(snapshot.val().credits)})
                this.props.firebase.database().ref('users/'+this.props.firebase.auth().currentUser.email.replace('.', '')).on('value', (snapshot) => {this.firstName(snapshot.val().firstName)})
                this.props.firebase.database().ref('users/'+this.props.firebase.auth().currentUser.email.replace('.', '')).on('value', (snapshot) => {this.lastName(snapshot.val().lastName)})
                this.email(this.props.firebase.auth().currentUser.email)
                this.setState({loggedIn: true}, () => this.loggedIn())
            } else {
                // No user is signed in.
                this.setState({credits: 0});
                this.setState({loggedIn:false}, () => this.loggedIn())
            }
    }) 

    
       
}

loggedIn() {
    let titleClasses = [...this.state.titleClasses]
    console.log(this.state.loggedIn)
        if(this.state.loggedIn){
            titleClasses[4] = "tabs-title hide"
            this.setState({titleClasses})
        }else{
            titleClasses[4] = "tabs-title"
            this.setState({titleClasses})
        }
    }; 

    credits(credits) {
        this.setState({credits})
    }

    firstName(firstName){
        this.setState({firstName})
    }

    lastName(lastName){
        this.setState({lastName})
    }

    email(email){
        this.setState({email})
    }

    select(ev){
        let titleClasses = [...this.state.titleClasses]
        let panelClasses = [...this.state.panelClasses]
        let titleSelected = [...this.state.titleSelected]
        for(let i = 0; i<titleClasses.length; i++){
            if(i == ev.currentTarget.id){
                titleSelected[i] = "true"
                titleClasses[i] = "tabs-title is-active"
                panelClasses[i] = "tabs-panel is-active"
            }else{
                titleSelected[i] = "false"
                titleClasses[i] = "tabs-title"
                panelClasses[i] = "tabs-panel"
            }
        }
        this.setState({titleSelected: titleSelected, titleClasses: titleClasses, panelClasses: panelClasses})   
    }

    addCredit(amount, email, credits) {

        this.props.firebase.database().ref('users/' + email).update({
            credits: credits + amount,
        });
    }

    logOut(){
        this.props.firebase.auth().signOut().then(function() {
        window.location.reload()
        }, function(error) {
         alert(error);
        });
    }

    render(){
        return (
            <div className="NavBar">
                <ul className="tabs" data-tabs id="example-tabs">
                    <li className={this.state.titleClasses[0]} id={0} onClick={this.select.bind(this)}><a href="#panel1" aria-selected={this.state.titleSelected[0]}><span className="col">HOME</span></a>
                    </li>
                    <li className={this.state.titleClasses[1]} id={1} onClick={this.select.bind(this)}><a href="#panel2" aria-selected={this.state.titleSelected[1]}><span className="col">Volunteer Opportunities</span></a>
                    </li>
                    <li className={this.state.titleClasses[2]} id={2} onClick={this.select.bind(this)}><a href="#panel2" aria-selected={this.state.titleSelected[2]}><span className="col">Rewards</span></a>
                    </li>
                    <li className={this.state.titleClasses[3]} id={3} onClick={this.select.bind(this)}><a href="#panel2" aria-selected={this.state.titleSelected[3]}><span className="col">Donate</span></a>
                    </li>
                    <li className={this.state.titleClasses[4]} id={4} onClick={this.select.bind(this)}><a href="#panel2" aria-selected={this.state.titleSelected[4]}><span className="col">Log In</span></a>
                    </li>
                    <li className={this.state.titleClasses[5]} id={5} onClick={this.select.bind(this)}><a href="#panel2" aria-selected={this.state.titleSelected[5]}><span className="col">Your Account</span></a>
                    </li>
                    <div className="b"><button type="button" className="button alert" onClick={this.logOut.bind(this)}>Log Out</button> </div>
                </ul>
                <div className="tabs-content" data-tabs-content="example-tabs">
                    <div className={this.state.panelClasses[0]} id="panel1">
                        <UserSiteInfo />
                    </div>
                    <div className={this.state.panelClasses[1]} id="panel2">
                        <Opportunities addCredit= {this.addCredit.bind(this)} firebase={this.props.firebase}/>
                    </div>
                    <div className={this.state.panelClasses[2]} id="panel2">
                        <Rewards firebase={this.props.firebase}/>
                    </div>
                    <div className={this.state.panelClasses[3]} id="panel2">
                        <Donate />
                    </div>
                    <div className={this.state.panelClasses[4]} id="panel2">
                        <UserAuthentication credits={this.credits.bind(this)} firebase={this.props.firebase} credits={this.state.credits} c={this.credits.bind(this)} />   
                    </div>
                    <div className={this.state.panelClasses[5]} id="panel2">
                        <Account credits={this.state.credits} firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} firebase={this.props.firebase} />
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default NavBar
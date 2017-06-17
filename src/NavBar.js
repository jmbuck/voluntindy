import React, {Component} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import UserSiteInfo from './UserSiteInfo'
import './NavBar.css'
import UserAuthentication from './UserAuthentication'
import Account from './Account'

class NavBar extends Component{
    constructor(){
        super()
        this.state = {
            titleClasses: ["tabs-title is-active", "tabs-title", "tabs-title", "tabs-title", "tabs-title", "tabs-title"],
            panelClasses: ["tabs-panel is-active", "tabs-panel", "tabs-panel", "tabs-panel", "tabs-panel", "tabs-panel"],
            titleSelected: ["true", "false", "false", "false", "false", "false"],
        }
    }

    componentDidMount() {

        this.props.firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in
                console.log('logged in');
                this.props.firebase.database().ref('users/'+this.props.firebase.auth().currentUser.uid).on('value', (snapshot) => {this.credits(snapshot.val().credits)})
            } else {
                // No user is signed in.
                console.log('none');
                this.setState({credits: 0});
        }
        });
  
    }

    credits(credits) {
        this.setState({credits})
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

    addCredit() {
        this.props.firebase.database().ref('users/' + this.props.firebase.auth().currentUser.uid).update({
            credits: this.state.credits + 1,
        });

        this.setState({
            credits: this.state.credits + 1
        })
    }

    render(){
        return (
            <div className="NavBar">
                <ul className="tabs" data-tabs id="example-tabs">
                    <li className={this.state.titleClasses[0]} id={0} onClick={this.select.bind(this)}><a href="#panel1" aria-selected={this.state.titleSelected[0]}>HOME</a>
                    </li>
                    <li className={this.state.titleClasses[1]} id={1} onClick={this.select.bind(this)}><a href="#panel2" aria-selected={this.state.titleSelected[1]}>Volunteer Opportunities</a>
                    </li>
                    <li className={this.state.titleClasses[2]} id={2} onClick={this.select.bind(this)}><a href="#panel2" aria-selected={this.state.titleSelected[2]}>Rewards</a>
                    </li>
                    <li className={this.state.titleClasses[3]} id={3} onClick={this.select.bind(this)}><a href="#panel2" aria-selected={this.state.titleSelected[3]}>Donate</a>
                    </li>
                    <li className={this.state.titleClasses[4]} id={4} onClick={this.select.bind(this)}><a href="#panel2" aria-selected={this.state.titleSelected[4]}>Log In</a>
                    </li>
                    <li className={this.state.titleClasses[5]} id={5} onClick={this.select.bind(this)}><a href="#panel2" aria-selected={this.state.titleSelected[5]}>Your Account</a>
                    </li>
                </ul>

                <button type="button" className="button" onClick={this.addCredit.bind(this)}>Add Credit</button>

                <div className="tabs-content" data-tabs-content="example-tabs">
                    <div className={this.state.panelClasses[0]} id="panel1">
                        <UserSiteInfo />
                    </div>
                    <div className={this.state.panelClasses[1]} id="panel2">
                        <p>Suspendisse dictum feugiat nisl ut dapibus. Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                    </div>
                    <div className={this.state.panelClasses[2]} id="panel2">
                        <p>Rewards</p>
                    </div>
                    <div className={this.state.panelClasses[3]} id="panel2">
                        <p>Donate</p>
                    </div>
                    <div className={this.state.panelClasses[4]} id="panel2">
                        <UserAuthentication credits={this.credits.bind(this)} firebase={this.props.firebase} />   
                    </div>
                    <div className={this.state.panelClasses[5]} id="panel2">
                        <Account credits={this.state.credits} firebase={this.props.firebase} />
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar
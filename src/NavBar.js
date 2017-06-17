import React, {Component} from 'react'
import SignIn from './SignIn'

class NavBar extends Component{
    constructor(){
        super()
        this.state = {
            titleClasses: ["tabs-title is-active", "tabs-title", "tabs-title", "tabs-title", "tabs-title", "tabs-title"],
            panelClasses: ["tabs-panel is-active", "tabs-panel", "tabs-panel", "tabs-panel", "tabs-panel", "tabs-panel"],
            titleSelected: ["true", "false", "false", "false", "false", "false"]
        }
    }

    select(ev){
        debugger
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
        console.log(titleClasses)
        this.setState({titleSelected: titleSelected, titleClasses: titleClasses, panelClasses: panelClasses})
        
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

                <div className="tabs-content" data-tabs-content="example-tabs">
                    <div className={this.state.panelClasses[0]} id="panel1">
                        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
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
                        <p>Log In</p>
                    </div>
                    <div className={this.state.panelClasses[5]} id="panel2">
                        <p>Your Account</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar
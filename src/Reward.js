import React, {Component} from 'react'
import './Reward.css'

class Rewards extends Component {
    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src="https://puu.sh/wmGrA/68c527dbde.png" />
                            
                        </td>
                        <td>
                            <img src="https://puu.sh/wmGtP/5512e43168.png" />
                            
                        </td>
                        <td>
                            <img src="https://puu.sh/wmGCy/1c286ae14d.png" />
                            
                        </td>
                        <td>
                            <img src="https://puu.sh/wmE4A/fd8328d623.png" />
                            
                        </td>
                        
                    </tr>
                    <tr>
                        <td><p className="itemReward">Giant Teddy Bear</p>
                        <p className="numCredit"><span className="material-icons" style={{"fontSize":"16px"}}> account_circle</span>300</p></td>
                        <td><p className="itemReward">$50 Gift Card</p> <p className="numCredit"><span className="material-icons" style={{"fontSize":"16px"}}> account_circle</span>100</p></td>
                        <td><p className="itemReward">Discount</p> <p className="numCredit"><span className="material-icons" style={{"fontSize":"16px"}}> account_circle</span>50</p></td>
                        <td><p className="itemReward">Pizza</p> <p className="numCredit"><span className="material-icons" style={{"fontSize":"16px"}}> account_circle</span>35</p></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="https://puu.sh/wmGFQ/67a89607ac.png" />
                        </td>
                        <td>
                            <img src="https://c1.staticflickr.com/7/6181/6100506145_b049c3196e_b.jpg" />
                        </td>
                        <td>
                            <img src="https://phorcys-static.ewg.org/Kwikeesystems/1415225848_49492/030000040904_CF___JPEG_3.JPG" />
                        </td>
                        <td>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Sport_Arena_Bounce_house_15x19_2014-02-03_14-15.jpg"/>
                        </td>
                    </tr>
                    <tr>
                        <td><p className="itemReward">Vacation</p> <p className="numCredit"><span className="material-icons" style={{"fontSize":"16px"}}> account_circle</span>7000</p></td>
                        <td><p className="itemReward">5-pound Gummy</p> <p className="numCredit"><span className="material-icons" style={{"fontSize":"16px"}}> account_circle</span>25</p></td>
                        <td><p className="itemReward">Grits</p> <p className="numCredit"><span className="material-icons" style={{"fontSize":"16px"}}> account_circle</span>24</p></td>
                        <td><p className="itemReward">Bouncy House</p> <p className="numCredit"><span className="material-icons" style={{"fontSize":"16px"}}> account_circle</span>65</p></td>
                    </tr>
                </tbody> 
            </table>
        )
    }
}

export default Rewards
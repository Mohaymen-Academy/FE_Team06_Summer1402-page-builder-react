import React from 'react'
import '../assets/styles/footer.css'
export default function Footer() {
    return (
        <div
            className='footer'>
            <div className='Icons'></div>
            <div
                className='tablecontent'>
                <table
                    style={{
                        // textAlign:'left'
                    }}
                >
                    <tr>
                        <th>Resources</th>
                        <th></th>
                        <th></th>
                        <th>Made by EpiK</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Distribute on Epik Games</td>
                        <td>Server Status</td>
                        <td>Online Services</td>
                        <td>Battle Breakres</td>
                        <td>Robo Recall</td>
                    </tr>
                    <tr>
                        <td>Careers</td>
                        <td>UX Research</td>
                        <td>Store EULA</td>
                        <td>Fall guys</td>
                        <td>Rocker League</td>
                    </tr>

                    <tr>
                        <td>Company</td>
                        <td>Community Rules</td>
                        <td>Epic Newsroom</td>
                        <td>Fortnite</td>
                        <td>Shadow Complex</td>
                    </tr>

                    <tr>
                        <td>Fan Art Policy</td>
                        <td></td>
                        <td></td>
                        <td>Infinity Blade</td>
                        <td>Unreal Tournament</td>
                    </tr>


                </table>
            </div>
            <hr className="solid" />
            <div
                className='discription'>
                © 2023, Epic Games,
                Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the
                <br /> Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.
            </div>
            <div
            className='links'>
                <a href="">
                    Terms of Service
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">
                    Private Policy
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Store Refund Policy</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Account Security</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Cookies Settings</a>
            </div>
        </div>
    )
}

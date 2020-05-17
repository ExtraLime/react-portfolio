import React from 'react'
import s3c from './icons/s3c.png'
import stnc from './icons/logo-stnc.png'
import { DateSpan, Position, Duties, Duty } from './Experience.styled'

const Experience = () => {
    return (
        <div className='experience'>
            <div className='current'>
                <p className='date-span'>April 2018-Present</p>
                <div classname='current-text'></div>
                <article>
                    Independent Consultant for Efficiency Solutions and International Trade	April 2018 – Present
                    Consulting for Cashew Factories
                    • Offer effective guidance to newly established cashew processing plants around the world.
                    Broker
                    • As part of the consultancy, brokered machine and part sales totaling over USD 5,000,000.
                            Delpoyed <a target='_blank' href='https://www.eurodesign.info'>EuroDesign.info</a>
                </article>
            </div>
            <div className='stnc'>
                <div><p className='date-span'>August 2016 – April 2018</p></div>
                <div className='stnc-grid'>
                    <div className="clogo"><img src={stnc} alt="logo stnc" width="170" height="100"></img></div>
                    <div className='stnc-info'>
                        <p className='company'>STNC-CI (S3C Group)</p>
                        <p className='location'>Abidjan, Côte d’Ivoire </p>
                    </div>
                </div>
                <article>
                    <p className='position'>Director of Operations - Managing a Cashew Factory</p>
                    <ul className='duties'>
                        <li>Employed Lean Six Sigma principles and analyzed large amounts of data to continuously increase efficiency and lower production costs.</li>
                        <li>Oversaw the entire operations of a facility employing over 500 employees. Sourced over 20,000 MT of raw cashew nuts.</li>
                        <li>Initiated and executed contracts internationally for the export of raw cashew nuts and cashew kernels. Annual turnover for 2017 was USD 18,000,000.00.</li>
                    </ul>
                    <p className='position'>Project Manager - Building a Cashew Factory</p>
                    <ul className='duties'>
                        <li>Spearheaded the development and execution of the installation of a 10,000 MT per year cashew processing facility.</li>
                        <li>Converted empty warehouses into a BRC certified food processing facility in 8 months; ahead of schedule by two months and 15% under budget.</li>
                    </ul>
                    <a target='_blank' href='https://stnc-ci.com/'>STNC-CI</a>

                </article>
            </div>
            <div className='s3c'>
                <div><p className='date-span'>September 2014 – August 2016</p></div>
                <div className='s3c-grid'>
                    <div className="clogo"><img src={s3c} alt="logo s3c" width="130" height="110"></img></div>
                    <div className='s3c-info'>
                        <p className='company'>S3C SA</p>
                        <p className='location'>Abidjan, Côte d’Ivoire </p>
                    </div>
                </div>
                <article>
                    <p className='position'>Director of Trade Analytics</p>
                    <ul className='duties'>
                        <li>Negotiated and executed multimillion-dollar contracts with international partners.</li>
                        <li>Developed expertise in procedures concerning international trade including international banking, documentary credit, and international shipping, managed product stocks valued at over USD 7,000,000.00 and produced a turnover of USD 12,000,000.00 annually for the cashew division.</li>
                    </ul>
                    <p className='position'>Director of Research and Development</p>
                    <ul className='duties'>
                        <li>Authored feasibility studies for various investment opportunities.</li>
                        <li>Traveled to India, Vietnam, and China to source the machinery necessary to execute the project.</li>
                        <li>Negotiated the purchase and delivery terms of the material ensuring that our material conformed to the exonerations that were awarded.</li>
                    </ul>
                </article>
            </div>


            <div className='onpoint'>
                <div><p className='date-span'>November 2012 – June 2014</p></div>
                <div className='op-grid'>
                    <div className="clogo"><a target='_blank' href='https://www.onpointcu.com'><img src="https://www.onpointcu.com/wp-content/themes/onpointcu-theme/images/OnPoint_logo.svg" alt="logo onpoint" width="200" height="60"></img></a></div>
                    <div className='op-info'>
                        <p className='company'>OnPoint Community Credit Union</p>
                        <p className='location'>Portland, OR</p>
                    </div>
                </div>
                <article>
                    <p className='position'>Technology Team Lead</p>
                    <ul className='duties'>
                        <li>Promoted to manage a group of 10+ employees accountable for troubleshooting newly deployed systems.</li>
                    </ul>
                    <p className='position'>Digital Banking Systems Tester</p>
                    <ul className='duties'>
                        <li>Performed extensive testing for the new online banking platform before it was deployed credit union wide.</li>
                        <li>Discovered and proposed solutions to countless bugs, assuring compatibility with the credit union’s core systems.</li>
                        <li>Created manuals and procedural documents used credit union wide to better assist our members.</li>
                    </ul>
                    <p className='position'>Technology Team Member</p>
                    <ul className='duties'>
                        <li>Developed troubleshooting methods and coached other teams on how to quickly diagnose specific issues members would encounter.</li>
                    </ul>
                </article>
            </div>

            <div className='wells'>
                <div><p className='date-span'>July 2011 – June 2012</p></div>
                <div className='wells-grid'>
                    <div className="clogo"><a target='_blank' href='https://www.wellsfargo.com'><img src="https://symbols.getvecta.com/stencil_101/44_wells-fargo-icon.7009538bf1.svg" alt="logowf" width="150" height="100"></img></a></div>
                    <div className='wells-info'>
                        <p className='company'>Wells Fargo N.A.</p>
                        <p className='location'>Portland, OR</p>
                    </div>
                </div>
                <article>
                    <p className='position'>Financial Crimes Specialist</p>
                    <ul className='duties'>
                        <li>Leveraged skills in data analysis to navigate multiple databases and research systems, including Actimize, HOGAN, AXCIS, RE, OIB to ensure that CTRs were completed on time and in full compliance with current FinCEN regulations.</li>
                        <li>Worked on multiple manual reports and trained multiple employees.</li>
                    </ul>
                </article>
            </div>
        </div>
    )
}
export default Experience

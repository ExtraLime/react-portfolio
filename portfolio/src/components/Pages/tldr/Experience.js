import React from 'react'
import s3c from './icons/s3c.svg'
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
                <p className='date-span'>August 2016 – April 2018</p>
                    <img src="https://stnc-ci.com/wp-content/uploads/2018/06/logo-stnc.jpg" alt="logo stnc" class="img-responsive" width="110" height="50"></img>
                        <article>
                            <p className='company'>STNC-CI (S3C Group)</p>
                            <p className='location'>Abidjan, Côte d’Ivoire </p> 	
                            <p className='position'>Director of Operations</p>
                            <ul>
                            <li>Employed Lean Six Sigma principles and analyzed large amounts of data to continuously increase efficiency and lower production costs.</li>
                            <li>Oversaw the entire operations of a facility employing over 500 employees. Sourced over 20,000 MT of raw cashew nuts.</li>
                            <li>Initiated and executed contracts internationally for the export of raw cashew nuts and cashew kernels. Annual turnover for 2017 was USD 18,000,000.00.</li>
                            </ul>
                            <p className='position'>Project Manager</p>
                            <ul>
                            <li>Spearheaded the development and execution of the installation of a 10,000 MT per year cashew processing facility.</li>
                            <li>Converted empty warehouses into a BRC certified food processing facility in 8 months; ahead of schedule by two months and 15% under budget.</li>
                            </ul>
                             <a target='_blank' href='https://stnc-ci.com/'>STNC-CI</a>

                        </article>
            </div>
            <div className='s3c'>
                <p className='date-span'>September 2014 – August 2016</p>
                <img src={s3c} alt="logo stnc" class="img-responsive" width="110" height="50"></img>
                    <article>
                            S3C Sa, Abidjan, Côte d’Ivoire 	
                            Director of Cashew Operations
                            • Negotiated and executed multimillion-dollar contracts with international partners.
                            • Developed expertise in procedures concerning international trade including international banking, documentary credit, and international shipping, managed product stocks valued at over USD 7,000,000.00 and produced a turnover of USD 12,000,000.00 annually for the cashew division.

                            Director of Research and Development
                            • Authored feasibility studies but various investment opportunities.
                            • Traveled to India, Vietnam, and China to source the machinery necessary to execute the project.
                            • Negotiated the purchase and delivery terms of the material ensuring that our material conformed to the exonerations that were awarded. <a target='_blank' href='https://www.eurodesign.info'>EuroDesign.info</a>
                    </article>
            </div>

            <div className='onpoint'>
                <p className='date-span'>September 2014 – August 2016</p>
                  <img src="https://www.onpointcu.com/wp-content/themes/onpointcu-theme/images/OnPoint_logo.svg" alt="logo stnc" class="img-responsive" width="110" height="50"></img>
                    <article>
                            OnPoint Community Credit Union, Portland, OR 	November 2012 – June 2014
                            Technology Team Lead
                            • Promoted to manage a group of 10+ employees accountable for troubleshooting newly deployed systems.

                            Digital Banking Systems Tester
                            • Performed extensive testing for the new online banking platform before it was deployed credit union wide.
                            • Discovered and proposed solutions to countless bugs, assuring compatibility with the credit union’s core systems.
                            • Created manuals and procedural documents used credit union wide to better assist our members.

                            Technology Team Member
                            • Developed troubleshooting methods and coached other teams on how to quickly diagnose specific issues members would encounter.<a target='_blank' href='https://www.eurodesign.info'>EuroDesign.info</a>
                    </article>
            </div>
            
            <div className='wells'>
                <p className='date-span'>September 2014 – August 2016</p>
                  <img src="https://symbols.getvecta.com/stencil_101/44_wells-fargo-icon.7009538bf1.svg" alt="logo stnc" class="img-responsive" width="110" height="50"></img>
                    <article>
                            Wells Fargo, Portland, OR 	July 2011 – June 2012
                            Currency Transaction Report Specialist, Financial Crimes Department
                            • Leveraged skills in data analysis to navigate multiple databases and research systems, including Actimize, HOGAN, AXCIS, RE, OIB to ensure that CTRs were completed on time and in full compliance with current FinCEN regulations.
                            • Worked on multiple manual reports and trained multiple employees.
                    </article>
            </div>
        </div>
    )
}
export default Experience

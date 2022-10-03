import React from 'react'
import Tree from '../../images/EnvironmentalImpact.webp'

const environmentalProjects = () => {

    return(
        <div>
            <div className="simpleFlex">
                <div className="maxWidth width80Per">
                    
                    <div className="treeGrid size18Font lineHeight30 padTop40">
                        <div className="innerTreeGrid">
                            <div className="simpleTitle item1">Environmental Impact Projects</div>
                            <div className="item2">We understand that environmental factors effect us all. We believe that helping the climate crisis starts with direct impact on communities most effected.</div>

                            <div className="item3">Lower income communities and communities with higher percentage of people of color are disproportionately affected by climate change.</div>
                        </div>
                        <div className="simpleFlex"><img src={Tree} className="item4"></img></div>
                        
                    
                    <div className="item5">Director of Environmental Impact and Sustainability Zach Koshgarian has a plan. Community-based direct action coupled with long-term sustainable solutions. We've started with Community Clean Up events with our volunteers in Brooklyn, Harlem, and the Bronx. We are looking at joint ventures with the city toward growing sustainable, environment improving plants and fauna. Plants like chrysanthemums require little maintenance  beyond being kept in a well ventilated planter, but are rated as one of the most efficient air quality.</div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default environmentalProjects;
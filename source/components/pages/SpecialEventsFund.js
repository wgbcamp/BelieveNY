import React from 'react'

const dtsef = () => {

    return(
        <div className="simpleFlex padTop80">
            <div className="maxWidth width80Per size22Font lineHeight35">
                <p>
                Believe New York is a startup non-profit in New York City, and as our services grow, so does our community involvement. 
                </p>
                <p>
                Our first event featured feeding the under-privileged on Thanksgiving 2020 in Herbert Von King Park in Bedstuy. Since then, we have hosted monthly events across the city. Neighborhood Clean Ups, Food Drives, Free To-Go Meals, Essential Care Packages, etc. To date, we have served food, clothing and essential products to thousands of individuals and families in need. In addition, we have helped to make our neighborhoods cleaner. Working together we can accomplish anything but there is still much more to be completed and many more underserved people to support.
                </p>
                <p>
                In order to continue these events, we rely on the generous donations of our supports. Please consider donating using the link below to help us continue to host these events.
                </p>
                <p className="padBottom40"><b>
                All proceeds collected from this link will go towards these community impact projects and events. 
                </b>
                </p>
                <div className="simpleFlex">
                    <Link to="/donate" className="submitButton1">Donate Here</Link>
                </div>
            </div>
        </div>
    )
}

export default dtsef;
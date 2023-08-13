import React, {useState, useEffect} from 'react'
import image1 from '../images/ImpactReportDocs/ImpactReport23_Page_01.png'
import image2 from '../images/ImpactReportDocs/ImpactReport23_Page_02.png'
import image3 from '../images/ImpactReportDocs/ImpactReport23_Page_03.png'
import image4 from '../images/ImpactReportDocs/ImpactReport23_Page_04.png'
import image5 from '../images/ImpactReportDocs/ImpactReport23_Page_05.png'
import image6 from '../images/ImpactReportDocs/ImpactReport23_Page_06.png'
import image7 from '../images/ImpactReportDocs/ImpactReport23_Page_07.png'
import image8 from '../images/ImpactReportDocs/ImpactReport23_Page_08.png'
import image9 from '../images/ImpactReportDocs/ImpactReport23_Page_09.png'
import image10 from '../images/ImpactReportDocs/ImpactReport23_Page_10.png'
import image11 from '../images/ImpactReportDocs/ImpactReport23_Page_11.png'
import image12 from '../images/ImpactReportDocs/ImpactReport23_Page_12.png'
import image13 from '../images/ImpactReportDocs/ImpactReport23_Page_13.png'
import image14 from '../images/ImpactReportDocs/ImpactReport23_Page_14.png'
import image15 from '../images/ImpactReportDocs/ImpactReport23_Page_15.png'
import image16 from '../images/ImpactReportDocs/ImpactReport23_Page_16.png'
import image17 from '../images/ImpactReportDocs/ImpactReport23_Page_17.png'
import image18 from '../images/ImpactReportDocs/ImpactReport23_Page_18.png'
import image19 from '../images/ImpactReportDocs/ImpactReport23_Page_19.png'
import image20 from '../images/ImpactReportDocs/ImpactReport23_Page_20.png'
import image21 from '../images/ImpactReportDocs/ImpactReport23_Page_21.png'
import image22 from '../images/ImpactReportDocs/ImpactReport23_Page_22.png'
import image23 from '../images/ImpactReportDocs/ImpactReport23_Page_23.png'
import image24 from '../images/ImpactReportDocs/ImpactReport23_Page_24.png'

const impactReport = () => {
    

    var images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24];

    var [imageCount, updateIC] = useState(0);

    return(
            <div className="simpleFlex">
                <div className="maxWidth pdfWidth">
                <iframe className="pdfViewer"
                    src="https://drive.google.com/file/d/1NDOvAUNAPM7jPjuuaeAqumV8yQnPNzxx/preview"
                    height="100%"
                    width="100%"
                ></iframe>
                </div>
            </div>
    )
}

export default impactReport;
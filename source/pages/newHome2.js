import React, { useRef, useState, useEffect } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import styles from '../css/home2.module.css'
import '../css/main.css'
import crowd from '../images/events/MentalHealthFair_Events.jpg';
import CategoryBox from '../components/categoryBox'
import clothingHandout from '../images/clothesMealHandOuts/clothing.webp'
import stand from '../images/summerHairCuts/IMG_4354.JPG'
import communityCleanup from '../images/communityCleanUp/IMG_3367.JPG'
import mentalhealthfair from '../images/events/MentalHealthFair_Events.jpg'
import communityAdvocates from '../images/events/CommunityAdvocates.jpeg'
import foodDelivery from '../images/events/foodDelivery.jpeg'
import donuts from '../images/events/donuts.jpeg'
import calendar from '../images/general/calendarNoShadow.png'


var accomplishments = ["Connected 23 clients to shelters, transitional homes, and long-term housing solutions",
  "Secured food assistance for 18 clients through local food pantries and governmental programs.",
  "Supported 14 clients experiencing domestic abuse by connecting them to mental health care, legal services, and safe housing solutions.",
  "Secured affordable mental health care for 22 clients and aided in obtaining affordable health insurance.",
  "Delivered greater than 7,000 hours of supportive mental health talk session, primarily reoccurring sessions with our active clients."];

const newHome2 = () => {

var [advance, setAdvance] = useState(0);
var [retreat, setRetreat] = useState(0);

const parentRef = useRef(null);
const direction = useRef(null);
const restrictInput = useRef(false);
const visibleElement = useRef(null);

const [isInView, setIsInView] = useState(false);


  useEffect(() => {
    //set values for the image carousel
    const parent = parentRef.current;
    const childNodes = Array.from(parent.childNodes);
    const firstChild = childNodes[0];
    const lastChild = childNodes[childNodes.length - 1];

    //reorganize divs in image carousel based on button clicked
    if (parentRef.current && advance != 0 && direction.current === "right") {
      if (childNodes.length > 1) {

        lastChild.classList.add(styles.fadeOut);

        setTimeout(function () {
          parent.insertBefore(lastChild, firstChild);
          // parent.appendChild(firstChild);
          lastChild.classList.remove(styles.fadeOut);
        }, 500);
      }
    } else if (parentRef.current && retreat != 0 && direction.current === "left") {
      if (childNodes.length > 1) {

        firstChild.classList.add(styles.fadeIn);
        parent.appendChild(firstChild);

        setTimeout(function () {
          firstChild.classList.remove(styles.fadeIn);
        }, 500);
      }
    }
    //re-render page based on any state change
  }, [advance, retreat]); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, 
        rootMargin: '-70px 0px 0px 0px', 
        threshold: 1, 
      }
    );

    if (visibleElement.current) {
      observer.observe(visibleElement.current);
    }

    return () => {
      if (visibleElement.current) {
        observer.unobserve(visibleElement.current);
      }
    };
  }, [visibleElement]);

  function move(value) {
    //restrict input and set 500ms delay between click functionality
    if (restrictInput.current === false) {
      restrictInput.current = true;
      setTimeout(function () {
        restrictInput.current = false;
      }, 500); 
      if (value === "right") {
        setAdvance(advance => advance + 1);
        direction.current = "right";
      } else if (value === "left") {
        setRetreat(retreat => retreat + 1);
        direction.current = "left";
      }
    }
  }

  const [resetAnimation, setResAnimation] = useState(false);

  //prevent default value causing animation to occur on calendar image
  function trackIteration() {
      setResAnimation(true);
  }

    return(
        <div className={styles.parentFont}>
          <div className={styles.titleBlock}>
            <div className={styles.tinyTitle}>Believe New York Philanthropies</div>
            <div className={styles.title}>Advancing our city & the lives of new yorkers</div>
            <div className={styles.barrier}>
              <div className={styles.barrierLineFlex}>
                <div className={styles.barrierBall}></div>
                <div className={styles.barrierLineInnerFlex}>
                  <div className={styles.barrierLine}></div>
                </div>
              </div>
            </div>
            <div className={styles.missionStatement}>Believe New York is on a mission—to improve the lives of all individuals and families in New York City, but we need your help, Donate Now to support our mission!
            </div>
            <div className={styles.linkButtonFlex}>
              <div className={styles.linkButton}>Learn more</div>
            </div>
          </div> 
          <div className={styles.separator}></div>
          
            <div className={styles.openSpaceBlock}>
              <div className={styles.smallTitle}>The Open Space</div>
              <div className={styles.calendarContainer} ref={visibleElement}>
                <img src={calendar} className={`${styles.calendar} ${isInView ? styles.floatingCalendar : resetAnimation ? styles.restingCalendar : ""}`} onAnimationIteration={() => trackIteration()}></img>
              </div>
              <div className={styles.phraseBlock}>A safe place to vent anonymously about any stress or mental health concerns you have.</div>
              <div className={styles.phraseBlockMinor}>100% free of charge and confidential, the Open Space offers a safe and nonjudgemental place to talk about what you are going through while remaining anonymous.
              </div>
              <div className={styles.linkButtonFlexReverse}>
                <div className={styles.linkButton}>Request a session</div>
              </div>
            </div>
            <div className={styles.subBlock}>
            <div className={styles.smallTitle}>A year of progress</div>
            <div className={styles.groupPhoto}></div>
            <div className={styles.listFlex}>
                {accomplishments.map((value) => (
                  <div className={styles.listElementFlex} key={value}>
                    <div className={styles.fontawesomeFlex}>
                      <i className="fa-solid fa-sm fa-check"></i>
                    </div>
                    <div>{value}</div>
                  </div>
                ))}  
            </div>
            <div className={styles.linkButtonFlexWide}>
              <div className={styles.linkButton}>See how we're making a difference</div>
            </div>
          </div>
          <div className={styles.carouselBlock}>
            <div className={styles.arrowContainer}>
              <button className={`${styles.arrowButton} ${styles.leftArrow}`} onClick={() => move("left")}><span>&#8249;</span></button>
              <button className={`${styles.arrowButton} ${styles.rightArrow}`} onClick={() => move("right")}><span>&#8250;</span></button>
            </div>
            <div ref={parentRef} className={styles.carouselContainer}>
              <img src={donuts} className={styles.imageResize}></img>
              <img src={foodDelivery} className={styles.imageResize}></img>
              <img src={communityAdvocates} className={styles.imageResize}></img>           
            </div>
          </div>         
        </div>
    )
}

export default newHome2;
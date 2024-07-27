import React from 'react'
import styles from '../css/categoryBoxCss.module.css'

const categoryBox = (props) => {
  
  const image = {
    backgroundImage: `url(${props.image})`
  };
  
  const gradient = {
    backgroundColor: props.gradient
  }
  
  const fontawesome = {
    
  }
  
    return(
        <div className={styles.background}>
          {/* <img src={clothingHandout}/> */}
          <div className={styles.backgroundImage} style={image}>
            <div className={styles.gridGradient} >
              <div className={styles.backgroundGrid}>
                <div className={styles.categoryTitle}>{props.title}</div>
                <div></div>
                <div className={styles.categoryDescriptionGrid}>
                  <div className={styles.categoryDescription}>{props.description}</div>
                  <i className={`${styles.arrowRight} fa-solid fa-circle-arrow-right fa-2xs`}></i>                  
                </div>
              </div>
            </div>  
          </div>
        </div>
    )
}

export default categoryBox;
import React from "react";
import styles from "../css/backend.module.css";

const unused = () => {
  return (
    <div>
      <div className="simpleFlex">
        <div className="maxWidth width80Per">
          <div className={styles.mainFlexBox}>
            <div className={styles.uploadBox}>
              <div className={styles.firstRow}>
                <div>Upload Image</div>
                <div>X</div>
              </div>
              <div className={styles.secondRow}>
                <div className={styles.dropZone}></div>
                <div className={styles.statusZone}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default unused;

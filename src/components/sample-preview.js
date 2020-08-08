import React from 'react'

import styles from './sample-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <h3 className={styles.previewTitle}>
      {article.title}
    </h3>
    <small>{article.publishDate}</small>
    <p>{article.description}</p>
  </div>
)

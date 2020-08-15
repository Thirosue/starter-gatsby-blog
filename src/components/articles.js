import React from 'react'
import SamplePreview from './sample-preview.js'

import useArticle from '../hooks/useArticle';

export default () => {
  const { articles } = useArticle();

  return (
    <ul className="article-list">
      {articles.map((node, i) => {
        return (
          <li key={i}>
            <SamplePreview article={node} />
          </li>
        )
      })}
    </ul>
  )
}



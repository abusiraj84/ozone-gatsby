import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>أوزون الحلم بين يديك</h1>
        <p>لأول مرة عربيا، برلمان منتخب بأصواتكم، يناقش قضاياكم ويطرح أفكاركم تعرفوا على "برلمان شعيب"</p>
        <Link to="/page-2/">شاهد الفيديو</Link>
      </div>
    </div>
  </div>
)

export default IndexPage

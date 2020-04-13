import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>أوزون ميديا<br /> الحلم أصبح حقيقة!</h1>
        <p>لأول مرة عربيا، برلمان منتخب بأصواتكم، يناقش قضاياكم ويطرح أفكاركم تعرفوا على "برلمان شعيب"</p>
        <br />
        <Link to="/page-2/">أطلب الآن</Link>

        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>

        <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
          
          M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;

          M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
          "
            />
          </path>
        </svg>


      </div>
    </div>
    <div className="Cards">
      <h2>نحن نقدم الخبرة والتجربة</h2>
      <div className="CardGroup">
        <Card
          title="الحياة حلوة بس نفهمها"
          text="12 قصة ناجحة"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="عثرات في طريق مظلم"
          text="53 قصة ناجحة"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="غموض يجتاح المكان"
          text="6 قصة ناجحة"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="درجات على سلم التفوق"
          text="34 قصة ناجحة"
          image={require('../images/wallpaper4.jpg')}
        />
        </div>
    </div>
  </div>
)

export default IndexPage


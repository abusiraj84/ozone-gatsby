import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '..//components/Section'
import Wave from '../components/Wave'
import Posts from '../components/Posts'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostPage from '../components/PostPage'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>أوزون ميديا<br /> الحلم أصبح حقيقة!</h1>
        <br />
        <br />
        <p>لأول مرة عربيا، برلمان منتخب بأصواتكم، يناقش قضاياكم ويطرح أفكاركم تعرفوا على "برلمان شعيب"</p>
        <br />
        <Link to="/page-2/">اكتشف المزيد</Link>

        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>

        <Wave />


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
        <Card
          title="درجات على سلم التفوق"
          text="34 قصة ناجحة"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="درجات على سلم التفوق"
          text="34 قصة ناجحة"
          image={require('../images/wallpaper.jpg')}
        />
      </div>
    </div>

    <Section
      image={require('../images/ourworks.jpeg')}
      logo={require('../images/logo-aljazeera.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />


    <Posts />



  </div>
)

export default IndexPage


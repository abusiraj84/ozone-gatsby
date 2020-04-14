import React from 'react'
import Link from 'gatsby-link'
import './Header.css'




class Header extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',
    this.handleScroll)
  }
handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if(scrollTop > 50 ){
    this.setState({ hasScrolled: true})
  }else{
    this.setState({ hasScrolled: false})
  }
}
  
  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-aljazeera.png')} width="150" /></Link>
          <Link to="/courses">من نحن</Link>
          <Link to="/downloads">تواصل معنا</Link>
          <Link to="/workshops">رسالتنا</Link>
          <Link to="/buy"><button>اطلب خدمة</button></Link>
        </div>
      </div>
    )
  }
}
export default Header

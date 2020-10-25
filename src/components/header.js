import React from 'react'
import Link from 'gatsby-link'
import './Header.css'




class Header extends React.Component {
  constructor(props) {
    super(props)
    let dark = JSON.parse(localStorage.getItem('isDarkMode'));
    console.log(dark)
    this.state = {
      hasScrolled: false,
      isDarkMode: dark || false,
      bubble: false
    }
    this.off = this.off.bind(this);
    this.shoot = this.shoot.bind(this);
  }

  showBubble(e) {
    e.preventDefault()
    this.setState({
      bubble: !this.state.bubble,
    })
    console.log(this.state.bubble)
  }

  off() {

    this.setState({
      isDarkMode: !this.state.isDarkMode,
    })

    if (this.state.isDarkMode) {
      localStorage.setItem('isDarkMode', JSON.stringify(false))
    }

    else {
      localStorage.setItem('isDarkMode', JSON.stringify(true))
    }
  }

  shoot() {
    this.setState({
      bubble: !this.state.bubble,
    })
    console.log(this.state.bubble)
  }


  componentDidMount() {

    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }



  render() {
    this.state.isDarkMode ? document.body.style.background = "rgb(33, 44, 79)" : document.body.style.background = "#fff"
    this.state.isDarkMode ? document.body.style.color = "rgb(33, 44, 79)" : document.body.style.color = "#fff"
    return (
      <div>
        <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
          <div className={this.state.hasScrolled ? 'ThemeSwitcherScrolled' : 'ThemeSwitcher'} onClick={() => { this.off() }}>
            <div className={this.state.isDarkMode ? 'off' : 'on'}>  <img src={require('../images/sun.svg')} width="20" /></div>
            <div className={this.state.isDarkMode ? 'on' : 'off'}> <img src={require('../images/moon.svg')} width="20" /></div>
          </div>

          <div className="HeaderGroup">
            <Link to="/"><img src={require('../images/logo-aljazeera.png')} width="100" /></Link>
            <Link className="link" to="/ourworks">أعمالنا</Link>
            <Link className="link" to="/downloads">تواصل معنا</Link>
            <Link className="link" to="/workshops">رسالتنا</Link>
            <Link to="/buy"><button>اطلب خدمة</button></Link>
          </div>

        </div>
        <div className="all-info">
          <div className={this.state.bubble ? 'info' : 'info-no'} >
            <h3>أعمال صوتية</h3>
            <h3>مرئيات</h3>
            <h3>تصميم 3D</h3>
            <h3>برمجة مواقع</h3>
            <h3>برمجة تطبيقات</h3>

          </div>
          <div className="bubble" onClick={this.shoot}></div>
        </div>

      </div>
    )
  }
}
export default Header

import React from 'react'
import logo from '../../assets/img/logo.jpg'

function Footer() {
  return (
    <div className='footer'>
        <div className='first__edition'>
            <Link>
                <img src={logo} alt="" />
            </Link>
            <div className='footer__connect'>
                <span>
                    <p><a target="_blank" href="https://icons8.com/icon/P7UIlhbpWzZm/gmail">Gmail</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>    
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer
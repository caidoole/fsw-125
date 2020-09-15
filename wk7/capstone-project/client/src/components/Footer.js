import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDev } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='footer'>
      <h4>Other Works Found On: </h4>
      <FontAwesomeIcon icon={faGithub} className='fa' />
      <FontAwesomeIcon icon={faInstagram} className='fa' />
      <h4>
        Powered By:
      </h4>
      <FontAwesomeIcon icon={faReact} className='fa' />
      <FontAwesomeIcon icon={faDev} className='fa' />

      <h4>Content Compiled By:</h4>
      <h4> Caitlin Dooley</h4>

    </div>
  )
}

export default Footer
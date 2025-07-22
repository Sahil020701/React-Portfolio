import sahilFormal from '../../assets/sahil_formal.jpg'
import './Page-top.css'
import { TwitterBoxedSVG, LinkedInBoxedSVG, GithubBoxedSVG } from '../../assets/Svg'


function PageTop() {

  return (

      <div className='pageTopWrapper'>
        
          <img style={{ height: '200px', width: 'auto', borderRadius: '8px' }} src={sahilFormal} alt="Sahil Formal" />
          <div className='mediaIcons'>
            <GithubBoxedSVG className='svg-icons' onClick={() => window.open('https://github.com/Sahil020701', '_blank')} />
            <LinkedInBoxedSVG className='svg-icons' onClick={() => window.open('https://www.linkedin.com/in/sahil-gobade-6bbb27219/', '_blank')} style={{ width: 40, height: 40, color: 'white' }} />
            <TwitterBoxedSVG className='svg-icons' style={{ width: 40, height: 40, color: 'white' }} />
          </div>
      </div>

  )
}

export default PageTop
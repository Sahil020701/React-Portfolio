import sahilFormal from '../../assets/sahil_formal.jpg'
import './page-top.css'
import { TwitterBoxedSVG, LinkedInBoxedSVG, GithubBoxedSVG } from '../../assets/Svg'


function PageTop() {

  return (

      <div className='pageTopWrapper'>
        
          <img style={{ height: '200px', width: 'auto', borderRadius: '8px' }} src={sahilFormal} alt="Sahil Formal" />
          <div className='mediaIcons'>
            <GithubBoxedSVG />
            <LinkedInBoxedSVG style={{ width: 40, height: 40, color: 'white' }} />
            <TwitterBoxedSVG style={{ width: 40, height: 40, color: 'white' }} />
          </div>
      </div>

  )
}

export default PageTop
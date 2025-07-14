import bgImg from './assets/bg-image.jpg'
import PageTop from './components/page-top/Page-top'
import Introduction from './components/introduction/Introduction'
import ExperienceBody from './pages/Experience/ExperienceBody'
import PersonalProjectsBody from './pages/PersonalProjects/PersonalProjects'
import VerticalProgress from './components/ProgessBar/VerticalProgress'
import './App.css'

function App() {

  return (
    <div style={{
        minHeight: '100vh',
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <VerticalProgress />
      <div className='pageWrapper'>
        <PageTop />
        <Introduction />
        <ExperienceBody />
        <ExperienceBody />
        <ExperienceBody />
        <PersonalProjectsBody />
        <PersonalProjectsBody />
        <PersonalProjectsBody />

      </div>
    </div>
  )
}

export default App
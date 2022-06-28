import Navbar from 'components/Navbar'
import SideBar from 'components/SideBar'
import { Container, SubContainer } from 'styles/dashboard'
import Connections from 'views/Dashboard/Connections'

const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <SideBar />
        <Connections />
      </SubContainer>
    </Container>
  )
}

export default Dashboard

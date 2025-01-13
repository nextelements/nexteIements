import { ThemeProvider } from '@nextelements/themes'
import { Content, ContentNav, Main, Footer, Header, Navigation, Wrapper } from '.'

import { getContentItems } from '@/lib/getContentItems'
import { getHeaderItems } from '@/lib/getHeaderItems'
import { NavigationNew } from './NavigationNew'

const testnewnav = false

const Layout = (props) => {  
  return (
    <ThemeProvider> 
      <div className="template-grid">
        <Header items={getHeaderItems} />
        <Wrapper>
          <Main>
            {testnewnav ? <NavigationNew /> : <Navigation items={getContentItems} />}
            <Content>
              { props.children }
              <ContentNav items={getContentItems} />
            </Content>
          </Main>
        </Wrapper>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export { Layout }
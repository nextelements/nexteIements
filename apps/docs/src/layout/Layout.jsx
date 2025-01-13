import { ThemeProvider } from '@nextelements/themes'
import { Content, Main, Footer, Header, Navigation, Wrapper } from '.'

import { getContentItems } from '@/lib/getContentItems'
import { getHeaderItems } from '@/lib/getHeaderItems'

const Layout = (props) => {
  return (
    <ThemeProvider> 
      <div className="template-grid">
        <Header items={getHeaderItems} />
        <Wrapper>
          <Main>
            <Navigation items={getContentItems} />
            <Content>
              { props.children }
            </Content>
          </Main>
        </Wrapper>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export { Layout }
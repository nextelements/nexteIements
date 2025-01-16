import { ThemeProvider } from '@nextelements/themes'
import { Content, ContentNav, Main, Footer, Header, Navigation, Wrapper, Sidebar } from '.'

import { getHeaderItems } from '@/lib/getHeaderItems'
import { getItems } from '@/lib/getItems';

const Layout = ({ children }) => {  

  const items = getItems()

  return (
    <ThemeProvider> 
      <div className="template-grid">
        <Header items={getHeaderItems} />
        <Wrapper>
          <Main>
            <Navigation items={items} />
            <Content>
              <div>{ children }</div>
              <ContentNav items={items} />
            </Content>
            <Sidebar>
              Table of Contents
            </Sidebar>
          </Main>
        </Wrapper>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export { Layout }
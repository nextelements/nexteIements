import { ThemeProvider } from '@nextelements/themes'
import { Content, Main, Footer, Header, Navigation, Wrapper, Logo } from './'

import { getAllMdxFiles } from '@/lib'

const Layout = (props) => {

  const items = getAllMdxFiles();

  return (
    <ThemeProvider initialTheme="light">
      <div className="body">
        <Header />
        <Wrapper>
          <Main>
            <Navigation items={items} />
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
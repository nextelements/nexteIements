'use client'

import { Header, Content, Wrapper, Menu, Sidebar } from './layout'

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header>Header</Header>
      <Wrapper>
        <Menu>
          Navigation
        </Menu>
        <Content>
          { children }
        </Content>
        <Sidebar>
          Sidebar
        </Sidebar>
      </Wrapper>
    </div>
  )
}
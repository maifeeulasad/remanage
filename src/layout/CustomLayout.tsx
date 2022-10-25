import React from 'react';
import Layout from 'antd/lib/layout';
import { Header } from './header/Header';
import { Content } from './content/Content';
import { Footer } from './footer/Footer';


interface ILayoutProps {
  children: any
}

// eslint-disable-next-line react/prefer-stateless-function
class CustomLayout extends React.Component<ILayoutProps> {
  render() {
    const { children } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content>
          {children}
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export { CustomLayout };

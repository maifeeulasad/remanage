import React from 'react';
import { Header as AntdHeader } from 'antd/lib/layout/layout';
import PageHeader from 'antd/lib/page-header';

const Header = () => (
  <AntdHeader style={{ backgroundColor: 'transparent' }}>
    <PageHeader
      title="re:manage"
      subTitle="Manage your ways"
    />
  </AntdHeader>
);

export { Header };

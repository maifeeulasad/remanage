import React from 'react';
import { Footer as AntdFooter } from 'antd/lib/layout/layout';

const Footer = () => (
  <AntdFooter style={{ position: 'sticky', bottom: '0', marginTop: 'auto' }}>
    <div style={{ textAlign: 'center' }}>
      <div>
        {/* @ts-ignore */}
        Trace: {__HEAD_COMMIT_HASH__}
      </div>
      <div>
        &copy; {new Date().getFullYear()} - Maifee Ul Asad
      </div>
    </div>
  </AntdFooter>
);

export { Footer };

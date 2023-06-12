import React from 'react';
import { Footer as AntdFooter } from 'antd/lib/layout/layout';

import styles from './footer.module.scss';

const Footer = () => (
  <AntdFooter className={styles.footer}>
    <div className={styles.footerTextCenter}>
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

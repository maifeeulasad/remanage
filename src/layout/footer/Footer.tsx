import React from 'react';
import { notification } from 'antd';
import { Footer as AntdFooter } from 'antd/lib/layout/layout';
import CopyOutlined from '@ant-design/icons/CopyOutlined';
// @ts-ignore
import { copyText } from 'copy-clipboard-js';

import styles from './footer.module.scss';

// @ts-ignore
const TRACE: string = __HEAD_COMMIT_HASH__;

const Footer = () => {
  const [api, contextHolder] = notification.useNotification();

  const copyLink = () => {
    copyText(TRACE);
    api.open({
      key: TRACE,
      message: 'Trace ID copied to clipboard',
      description: `ID: ${TRACE}`,
      duration: 2,
      closeIcon: <div />,
    });
  };

  return (
    <>
      {contextHolder}
      <AntdFooter className={styles.footer}>
        <div className={styles.footerTextCenter}>
          <div>
            Trace: {TRACE}
            <CopyOutlined onClick={() => copyLink()} />
          </div>
          <div>
            &copy; {new Date().getFullYear()} - Maifee Ul Asad
          </div>
        </div>
      </AntdFooter>
    </>
  );
};

export { Footer };

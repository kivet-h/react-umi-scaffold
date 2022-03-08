/*
 * @Description: 登录
 */

import type { FC } from 'react';
import { Layout, Image, Form, Input, Checkbox, Button, message } from 'antd';
import type { ConnectProps, Dispatch, IGlobalModelState, Loading } from 'umi';
import { connect, history } from 'umi';
import { DruidLocalStorage, DruidSessionStorage } from '@/utils/storage';
import { login_druid, login_bg_img } from '@/assets/images';
import { EnumStorage } from '@/utils/enum';
import { Helper } from '@/utils/helper';
import { IconFont } from '@/components';
import styles from './index.less';

const { version = 'v1.0.0' } = require('../../../package.json');

const { Header, Content } = Layout;

interface IProps extends ConnectProps {
  dispatch: Dispatch;
  posts: IGlobalModelState;
  loading: boolean;
}

const Login: FC<IProps> = (props: IProps) => {
  const { dispatch, loading = false } = props;

  const [form] = Form.useForm();

  const onLogin = () => {
    form.validateFields().then((res: IAnyObject) => {
      const { username = '', password = '', remember = true } = res;

      if (!username || !password) {
        message.warning('请输入账号和密码');
        return;
      }

      dispatch({
        type: 'global/fetchLogin',
        payload: {
          username,
          password: Helper.passwordEncryption(username, password),
        },
        callback: (loginRes: any) => {
          const { code = 0 } = loginRes;
          if (code) {
            message.info('登录失败');
            return;
          }

          const { token = '', ...userInfo } = loginRes;

          DruidLocalStorage.set(EnumStorage.USER_INFO, userInfo);

          // ? 记住登录-存LocalStorage，不记住登录-存SessionStorage
          if (remember) {
            DruidLocalStorage.set(EnumStorage.TOKEN, token);
          } else {
            DruidSessionStorage.set(EnumStorage.TOKEN, token);
          }

          // ? 登录成功，默认重定向到帖子列表页面
          history.replace('/postManager');
        },
      });
    });
  };

  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <Image className={styles.druid_img} src={login_druid} preview={false} />
      </Header>
      <Content className={styles.content}>
        <Image className={styles.login_bg_img} src={login_bg_img} preview={false} />
        <div className={styles.login_form__box}>
          <h1 className={styles.form_header}>登录</h1>
          <Form
            name="basic"
            form={form}
            initialValues={{
              remember: true,
            }}
            onFinish={onLogin}
          >
            <Form.Item name="username">
              <Input
                placeholder="请输入账号"
                style={{ height: 45 }}
                prefix={<IconFont iconName="geren" />}
              />
            </Form.Item>

            <Form.Item name="password">
              <Input.Password
                placeholder="请输入密码"
                style={{ height: 45 }}
                prefix={<IconFont iconName="mima" />}
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住登录</Checkbox>
            </Form.Item>

            <Button block type="primary" htmlType="submit" loading={loading}>
              登录
            </Button>
          </Form>
        </div>
        <div className={styles.version_box}>
          <div className={styles.project_name}>Intelink Console</div>
          <span className={styles.version}>v{version}</span>
        </div>
      </Content>
    </Layout>
  );
};

export default connect(({ global, loading }: { global: IGlobalModelState; loading: Loading }) => ({
  global,
  loading: loading.models.global,
}))(Login);

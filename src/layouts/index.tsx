import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  ConfigProvider,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Space,
  theme,
} from 'antd';
import { useState } from 'react';
import { Outlet, useModel } from 'umi';
import styles from './index.less';

const { Header, Sider, Content } = Layout;

export default function BaseLayout(props: any) {
  console.log(props,'layout props');
  const { initialState, setInitialState } = useModel('@@initialState');
  console.log(initialState, 'initialState');
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items: MenuProps['items'] = [
    {
      label: "个人中心",
      key: '0',
    },
    {
      label: "退出登录",
      key: '1',
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#00b96b',
          },
        },
      }}
    >
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.logo}>React Umi Admin</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: '用户管理',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: '文档中心',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className={styles.header}>
              <div className={styles.left}>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
              </div>
              <div className={styles.right}>
                <Space size={16} wrap>
                <Dropdown menu={{ items }} trigger={['click']}>
                  <span>{initialState?.currentUser.name}</span>
                  </Dropdown>
                  <Avatar
                    src={
                      <img
                        src={initialState?.currentUser.avatar}
                        alt="avatar"
                      />
                    }
                  />
                </Space>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

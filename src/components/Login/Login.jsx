import { Button, Checkbox, Divider, Form, Input } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const titleStyle = {
  textAlign: "left",
  margin: "0 0 12px 0",
  padding: "0 24px",
};

const formStyle = {
  width: "100%",
  margin: "0 auto",
  maxWidth: 500,
};

export const Login = () => {
  return (
    <>
      <Title level={2} style={titleStyle}>
        User Login
      </Title>
      <p className="m-0 px-6">Please log in to access the application.</p>
      <Divider />
      <Form
        name="user profile"
        colon={false}
        layout="horizontal"
        labelCol={{ span: 8 }}
        labelAlign="left"
        wrapperCol={{ span: 16 }}
        style={formStyle}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password." }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

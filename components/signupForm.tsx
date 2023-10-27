import React, { useState } from "react";
import { Form, Input, Button, Typography, Modal } from "antd";

const { Text } = Typography;

interface SignUpFormProps {
  isVisible: boolean;
  onClose: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ isVisible, onClose }) => {
  const [form] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onFinish = (values: any) => {
    console.log("Form Submitted:", values);
    setIsSubmitted(true);
  };

  return (
    <Modal
      title="Sign Up"
      open={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      width={window.innerWidth > 768 ? "33.33%" : "100%"}
    >
      {!isSubmitted ? (
        <Form name="signup" onFinish={onFinish}>
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[{ required: true, message: "Full Name is required" }]}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Invalid email address" },
            ]}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="verifyEmail"
            label="Verify Email"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            dependencies={["email"]}
            rules={[
              { required: true, message: "Verify Email is required" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("email") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Emails do not match");
                },
              }),
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            rules={[
              { required: true, message: "Phone Number is required" },
              { pattern: /^[0-9]+$/, message: "Invalid phone number" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            rules={[
              { required: true, message: "Password is required" },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{6,}$/,
                message:
                  "Password must contain at least 6 characters, 1 number, 1 uppercase, and 1 special character.",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            dependencies={["password"]}
            rules={[
              { required: true, message: "Confirm Password is required" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Passwords do not match");
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold rounded-full px-6 py-2 w-full"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div className="text-center">{/* ... success message ... */}</div>
      )}
      <div className="flex justify-center space-x-4 mt-4">
        <Button
          type="primary"
          onClick={onClose}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold rounded-full px-6 py-2"
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default SignUpForm;

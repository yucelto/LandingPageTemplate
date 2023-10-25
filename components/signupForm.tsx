import React, { useState } from "react";
import { Form, Input, Button, Typography, Space } from "antd";

const { Text } = Typography;

const SignUpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-md shadow-md w-1/3">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {!isSubmitted ? (
          <Form name="signup" onFinish={onFinish}>
            <Form.Item
              name="fullName"
              label="Full Name"
              rules={[{ required: true, message: "Full Name is required" }]}
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
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="verifyEmail"
              label="Verify Email"
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
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <div className="text-center">
            <Text type="success" strong className="text-lg mb-4">
              You are successfully registered!
            </Text>
            <Text type="secondary">
              Thank you for signing up with us. You can now log in to your
              account.
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;

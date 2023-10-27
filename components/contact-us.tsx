import React, { useState } from "react";
import { Form, Input, Button, Image } from "antd";

const ContactUs = () => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values) => {
    // Perform form submission logic here (send data to server, etc.)
    // For now, just simulate submission and show thank you message
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center p-8 w-full max-w-screen-xl mx-auto bg-white rounded-md shadow-lg">
      <h2 className="text-4xl font-bold mb-8">Discover Future Life</h2>
      <Form
        form={form}
        onFinish={handleSubmit}
        className="w-full max-w-screen-lg space-y-6"
      >
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input
            prefix={
              <Image
                src="/icon/contacts/user-circle-solid.svg"
                alt="Full Name"
                width={16}
                height={16}
              />
            }
            placeholder="Full Name"
            className="w-full"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email address" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input
            prefix={
              <Image
                src="/icon/contacts/envelope-solid.svg"
                alt="Email"
                width={16}
                height={16}
              />
            }
            placeholder="E-mail"
            className="w-full"
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input
            prefix={
              <Image
                src="/icon/contacts/phone-solid.svg"
                alt="Phone"
                width={16}
                height={16}
              />
            }
            placeholder="Phone"
            className="w-full"
          />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <Input.TextArea
            placeholder="Message"
            className="w-full"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Get Started
          </Button>
        </Form.Item>
      </Form>
      {submitted && (
        <div className="text-green-500 text-center mt-4">
          Thank you! We will contact you as soon as possible.
        </div>
      )}
    </div>
  );
};

export default ContactUs;

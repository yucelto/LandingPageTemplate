import React, { useState } from 'react';
import { Form, Input, Button, Image } from 'antd';
import { MailIcon, PhoneIcon, UserCircleIcon } from '@heroicons/react/solid';

const ContactUs = () => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values: any) => {
    // Perform form submission logic here (send data to server, etc.)
    // For now, just simulate submission and show thank you message
    setSubmitted(true);
  };

  return (
    <div className='p-8'>
      <h2 className='text-2xl md:text-4xl font-bold mb-8 text-center'>Discover Future Life</h2>
      <Form form={form} onFinish={handleSubmit} className='max-w-[500px] mx-auto'>
        <Form.Item name='fullName' rules={[{ required: true, message: 'Please enter your full name' }]}>
          <Input prefix={<UserCircleIcon className='text-gray-600 w-5 h-5' />} placeholder='Full Name' className='w-full' />
        </Form.Item>
        <Form.Item
          name='email'
          rules={[
            { required: true, message: 'Please enter your email address' },
            { type: 'email', message: 'Please enter a valid email address' },
          ]}>
          <Input prefix={<MailIcon className='text-gray-600 w-5 h-5' />} placeholder='E-mail' className='w-full' />
        </Form.Item>
        <Form.Item name='phone' rules={[{ required: true, message: 'Please enter your phone number' }]}>
          <Input prefix={<PhoneIcon className='text-gray-600 w-5 h-5' />} placeholder='Phone' className='w-full' />
        </Form.Item>
        <Form.Item name='message' rules={[{ required: true, message: 'Please enter your message' }]}>
          <Input.TextArea placeholder='Message' className='w-full' autoSize={{ minRows: 4 }} />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='w-full bg-slate-800'>
            Get Started
          </Button>
        </Form.Item>
      </Form>
      {submitted && <div className='text-green-500 text-center mt-4'>Thank you! We will contact you as soon as possible.</div>}
    </div>
  );
};

export default ContactUs;

import React from 'react';
import { Form, Input, Button, Modal } from 'antd';

interface SignUpFormProps {
  isVisible: boolean;
  onClose: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ isVisible, onClose }) => {
  return (
    <Modal title='Sign Up' open={isVisible} onCancel={onClose} footer={null} centered>
      <Form
        name='signup'
        autoComplete='off'
        requiredMark={false}
        layout='vertical'
        onFinish={(_) => Modal.info({ title: 'djklfdsaklfjdslkfj' })}>
        <Form.Item name='fullName' label='Full Name' rules={[{ required: true, message: 'Full Name is required' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='email'
          label='Email'
          rules={[
            { required: true, message: 'Email is required' },
            { type: 'email', message: 'Invalid email address' },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='verifyEmail'
          label='Verify Email'
          dependencies={['email']}
          rules={[
            { required: true, message: 'Verify Email is required' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('email') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('Emails do not match');
              },
            }),
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='phoneNumber'
          label='Phone Number'
          rules={[
            { required: true, message: 'Phone Number is required' },
            { pattern: /^[0-9]+$/, message: 'Invalid phone number' },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          rules={[
            { required: true, message: 'Password is required' },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{6,}$/,
              message: 'Password must contain at least 6 characters, 1 number, 1 uppercase, and 1 special character.',
            },
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          name='confirmPassword'
          label='Confirm Password'
          dependencies={['password']}
          rules={[
            { required: true, message: 'Confirm Password is required' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('Passwords do not match');
              },
            }),
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='bg-teal-500 hover:bg-teal-700 text-white font-bold rounded-full block mx-auto w-32 h-10'>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUpForm;

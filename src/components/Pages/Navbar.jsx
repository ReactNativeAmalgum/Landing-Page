import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logo/nav-log.png';
import './Navbar.css'; // Import your custom CSS file
import { Button, Modal, Form, Input, message } from 'antd';
import { useState } from 'react';

function BasicExample() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        // Optionally, you can validate and submit the form here
        form
            .validateFields()
            .then(values => {
                console.log('Received values of form: ', values);
                message.success('Enquiry submitted successfully!');
                setIsModalOpen(false);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [form] = Form.useForm();
    return (
        <Navbar expand="lg" className="custom-bg">
            <Container>
                <Navbar.Brand href="#home"><h3>Logo</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" mx-auto nav-links">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#trending">We Provide</Nav.Link>
                        <Nav.Link href="#properties">Lands</Nav.Link>
                        <Nav.Link href="#dealer">Agents</Nav.Link>
                        <Nav.Link href="#testimonial">Testimonial</Nav.Link>

                        <Nav.Link href="#contact">Contact</Nav.Link>

                    </Nav>
                    <div onClick={showModal} className="main__header--right d-flex align-items-center">

                        <a
                            className="add__listing--btn solid__btn"
                        >
                            <span>Make an Enquiry</span>
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 15.9992C12.4111 15.9992 16 12.4105 16 7.99962C16 3.58875 12.411 0 8 0C3.58901 0 0 3.58875 0 7.99962C0 12.4105 3.58901 15.9992 8 15.9992ZM4.19508 7.57155H7.57197V4.19439C7.57197 3.95805 7.76381 3.76636 8 3.76636C8.23634 3.76636 8.42804 3.95821 8.42804 4.19439V7.57155H11.8049C12.0413 7.57155 12.233 7.7634 12.233 7.99958C12.233 8.23592 12.0411 8.42762 11.8049 8.42762H8.42804V11.8046C8.42804 12.041 8.23619 12.2327 8 12.2327C7.76366 12.2327 7.57197 12.0408 7.57197 11.8046V8.42762H4.19508C3.95874 8.42762 3.76704 8.23577 3.76704 7.99958C3.76704 7.76324 3.9586 7.57155 4.19508 7.57155Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </div>
                    <Modal
                        title="Enquiry Form"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText="Submit"
                        cancelText="Cancel"
                    >
                        <Form
                            form={form}
                            layout="vertical"
                            name="enquiryForm"
                            initialValues={{}}
                        >
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please enter your name!' }]}
                            >
                                <Input placeholder="Enter your name" />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    { required: true, message: 'Please enter your email!' },
                                    { type: 'email', message: 'The input is not valid E-mail!' }
                                ]}
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[{ required: true, message: 'Please enter your message!' }]}
                            >
                                <Input.TextArea rows={4} placeholder="Enter your message" />
                            </Form.Item>
                        </Form>
                    </Modal>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;

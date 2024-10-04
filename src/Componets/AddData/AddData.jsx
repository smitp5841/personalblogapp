import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import generateUniqueId from 'generate-unique-id';
import { getData } from '../../Services/Helper/helper';
import { Navigate, useNavigate } from 'react-router';

function AddData() {

    const [inputData, setInputData] = useState({
        id: '',
        fname: '',
        commit: '',


    });


    const [addData, setAddData] = useState(getData("myData"));
    const navigate = useNavigate();
    const [myfalse, setMyFalse] = useState(false);

    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setInputData({ ...inputData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            ...inputData,
            id: generateUniqueId({
                length: 2,
                useLetters: false
            })
        }
        setAddData([...addData, obj]);
        setMyFalse(true);

    }
    useEffect(() => {

        localStorage.setItem("myData", JSON.stringify(addData));
    }, [addData]);

    useEffect(() => {
        if (myfalse) {
            navigate('/home');
        }
    }, [myfalse])



    return (
        <div>
            <h1 className='text-center display-1'>
                ADD BLOG
            </h1>
            <Container className=' p-4  '>
                <Form onSubmit={handleSubmit}>
                    <Form.Control name='id' value={inputData.id} onChange={handleChange} hidden />

                    <Row className="mb-3 ">
                        <Form.Group as={Col} >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name='fname' value={inputData.fname} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 ">
                        

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Commit</Form.Label>
                            <Form.Control as="textarea" rows={3}  name='commit' value={inputData.commit} onChange={handleChange} />

                        </Form.Group>

                    </Row>



                    <div className='d-flex justify-content-center '>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>



                </Form>
            </Container>

        </div>
    )
}

export default AddData

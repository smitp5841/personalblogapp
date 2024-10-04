import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import generateUniqueId from 'generate-unique-id';
import { getData } from '../../Services/Helper/helper';
import { Navigate, useNavigate, useParams } from 'react-router';

function Edit() {

   const {id} = useParams();

   useEffect (()=>{
     const data = addData.find((data)=>{
       return data.id === id
     })

     setInputData(data)
   },[])

  

    const [inputData, setInputData] = useState({
        id: id,
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

        // let obj = {
        //     ...inputData,
        //     id: generateUniqueId({
        //         length: 2,
        //         useLetters: false
        //     })
        // }

       
        let updateDate = addData.map((data)=>{
          if(data.id == id){
            return data= inputData
          }
          return data
          })


        setAddData(updateDate);
        setMyFalse(true);

    }
   
    useEffect(() => {

        localStorage.setItem("myData", JSON.stringify(addData));
    }, [addData]);

    useEffect(() => {
        if (myfalse) {
            navigate('/');
        }
    }, [myfalse])



    return (
        <div>
            <h1 className='text-center display-1'>
                EDIT DATA
            </h1>
            <Container className='bg-dark p-4  '>
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

export default Edit

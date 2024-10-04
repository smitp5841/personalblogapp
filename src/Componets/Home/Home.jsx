import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getData } from '../../Services/Helper/helper';
import { useNavigate } from 'react-router';
import { Form } from 'react-bootstrap';
import Header from '../Header/Header';

function Home() {


    const [view, setView] = useState(getData("myData"));

    console.log("view", view);

    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    }

    const handleDelete = (id) => {
        //delete logic

        const data = view.filter((data) => {
            return data.id !== id
        })


        localStorage.setItem("myData", JSON.stringify(data));
        setView(data)


    }

    const handleSort = (key) => {

        let sortedData;

        switch (key) {
            case "asc":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataF.fname.localeCompare(dataS.fname)
                })
                break;
            case "des":
                sortedData = [...view].sort((dataF, dataS) => {
                    return dataS.fname.localeCompare(dataF.fname)
                })
                break;

            default:
                break;
        }


        setView(sortedData)
    }

    const handleSearch = (e) => {



        const [search, setSearch] = useState(e.target.value);
    }




    return (

        <>
        <Header/>
            <div>
                <h1 className='text-center font-bold  fs-4 mb-16 mt-16'>
                    VIEW DATA
                </h1>

                <Container>
                 

                    <div className=''>
                        {
                            view.map((data) => {
                                return (
                                    <>
                                        <Card className="text-center mb-12">
                                            <Card.Header>{data.fname}</Card.Header>
                                            <Card.Body>

                                                <Card.Text>
                                                    {data.commit}
                                                </Card.Text>



                                            </Card.Body>
                                            <Card.Footer className="text-muted">
                                                <Button variant="primary" onClick={() => handleEdit(data.id)}>Edit</Button>||
                                                <Button variant="danger" onClick={() => handleDelete(data.id)}>Delete</Button>
                                               
                                            </Card.Footer>
                                        </Card>

                                    </>
                                )
                            })

                        }

                    </div>
                </Container>
            </div>
        </>
    )
}

export default Home

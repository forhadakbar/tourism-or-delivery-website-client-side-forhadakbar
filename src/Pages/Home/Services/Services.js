import React from 'react';
import { Row } from 'react-bootstrap';
import { useAPI } from '../../../Context/apiContext';
import Service from '../Service/Service';

const Services = () => {

    const { fakeData } = useAPI();

    console.log(fakeData);

    return (
        <div id="services" className="p-3">

            <h1 className="text-center py-5 fw-bold">Our Services</h1>

            <Row xs={1} md={3} className="g-4">

                {
                    fakeData.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }

            </Row>

        </div>
    );
};

export default Services;
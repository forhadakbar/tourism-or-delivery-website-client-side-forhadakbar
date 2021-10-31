import { useHistory, useParams } from 'react-router';
import { useAPI } from '../../Context/apiContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddNewService = () => {

    const { isLoadingData } = useAPI();


    // React hook form for extra form validation and error message
    const { register, handleSubmit, reset } = useForm();

    // handle redirected to user booking
    let history = useHistory();
    function handleRedirect() {
        console.log("redirect here")
        history.push('/home#services');
    }



    const onSubmit = data => {


        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data entry successfull');
                    reset();
                }
            })
            .then(() => {
                handleRedirect();
            });



    }


    return (
        <div>

            {

                !isLoadingData ?
                    <div className="d-flex justify-content-center align-items-center m-3">
                        <div className="container row">

                            <div className='mt-3 col-md-6 col-sm-12'>

                                <div className='row'>
                                    <div className='col-md-12'>
                                        <form
                                            onSubmit={handleSubmit(onSubmit)}
                                            className='login-form shadow bg-white rounded text-left p-3'
                                        >
                                            <h4 className='font-weight-bold mb-3'>Add a New Service</h4>
                                            <div className='form-group mt-2'>
                                                <input
                                                    className='form-control'
                                                    name='title'
                                                    type='text'
                                                    placeholder='Title'
                                                    {...register('title', { required: true })}
                                                    required
                                                />
                                                {/* {errors.name && <span className='error'>Name is required</span>} */}
                                            </div>
                                            <div className='form-group mt-2'>
                                                <input
                                                    className='form-control'
                                                    name='description'
                                                    type='text'
                                                    placeholder='Brief Description'
                                                    {...register('description', { required: true })}
                                                    required
                                                />
                                                {/* {errors.email && (
                            <span className='error'>Email is required</span>
                        )} */}
                                            </div>

                                            <div className='form-group mt-2'>
                                                <textarea
                                                    className='form-control'
                                                    name='detail'

                                                    placeholder='Details'
                                                    {...register('detail', { required: true })}
                                                    required
                                                />
                                            </div>

                                            <div className='form-group mt-2'>
                                                <input
                                                    className='form-control'
                                                    name='img'
                                                    placeholder='Image Link'
                                                    type='text'
                                                    rows='2'
                                                    {...register('img', { required: true })}
                                                    required
                                                ></input>

                                            </div>

                                            <div className='form-group mt-2'>

                                                <input
                                                    className='form-control'
                                                    name='cost'
                                                    placeholder='Cost'
                                                    type='text'
                                                    {...register('cost', { required: true })}
                                                    required
                                                />
                                            </div>

                                            <div className='form-group mt-2'>
                                                <button
                                                    style={{ width: '100%' }}
                                                    className='btn btn-primary'
                                                    type='submit'
                                                >
                                                    Add Service
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    :
                    // Adding spinner while data loading
                    <div className="d-flex justify-content-center my-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

            }





        </div>
    );
};

export default AddNewService;


import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Img from '../assets/images/ces1.jpg'

const Signup = () => {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.')
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message)
      }
      setLoading(false);
      if (res.ok) {
        navigate('/login');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  return (
    <div className=" mt-10">
      <div className="mb-10 mx-5 text-center">
        <p className="subheading">Welcome To</p>
        <h2 className="heading text-3xl md:text-4xl">Generations<span className="text-green300">Fix</span> </h2>
      </div>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* left side */}
        <div className='flex-1'>

          <img src={Img} className="rounded-2xl h-full" alt="" />

        </div>

        {/* right side */}
        <div className="flex-1">

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            <div>
              <Label value="Your Name" />
              <TextInput
                type="text"
                placeholder="Name"
                id="name"
                onChange={handleChange}
              />
            </div>

            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>

            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="example123@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>

            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>

            <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
              {
                loading ? (

                  <>
                    <Spinner size='sm' />
                    <span className="pl-3">Loading...</span>
                  </>

                ) : 'Sign Up'
              }
            </Button>

          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/login' className="text-blue-500">
              Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Signup;
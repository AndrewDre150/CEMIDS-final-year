// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';
// import './login.css'
// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <MDBContainer className="my-5">

//       <MDBCard>
//         <MDBRow className='g-0'>

//           <MDBCol md='6'>
//             <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
//           </MDBCol>

//           <MDBCol md='6'>
//             <MDBCardBody className='d-flex flex-column'>

//               <div className='d-flex flex-row mt-2'>
//                 <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
//                 <span className="h1 fw-bold mb-0">CEMIDS</span>
//               </div>

//               <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

//                 <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
//                 <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

//               <MDBBtn className="mb-4 px-5" color='dark' size='lg'><Link to='/dashboard'>Login</Link></MDBBtn>

//               {/* <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
//                 <MDBIcon fab icon="google" className="mx-2"/>
//                 Sign in with google
//               </MDBBtn> */}
              
//               <a className="small text-muted" href="#!">Forgot password?</a>
//               <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to='/signup' style={{color: '#393f81'}}> Register here</Link></p>

//               <div className='d-flex flex-row justify-content-start'>
//                 <a href="#!" className="small text-muted me-1">Terms of use.</a>
//                 <a href="#!" className="small text-muted">Privacy policy</a>
//               </div>

//             </MDBCardBody>
//           </MDBCol>

//         </MDBRow>
//       </MDBCard>

//     </MDBContainer>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            navigate('/dashboard');
        } catch (error) {
            console.error(error.code, error.message);
        }
    };

    return (
        <MDBContainer className="my-5">
            <MDBCard>
                <MDBRow className='g-0'>
                    <MDBCol md='6'>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100' />
                    </MDBCol>
                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>
                            <div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">CEMIDS</span>
                            </div>
                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                            <form onSubmit={onLogin}>
                                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <MDBBtn className="mb-4 px-5" color='dark' size='lg' type="submit">Login</MDBBtn>
                            </form>
                            <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to='/signup' style={{ color: '#393f81' }}> Register here</Link></p>
                            <div className='d-flex flex-row justify-content-start'>
                                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </div>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
    );
}

export default Login;



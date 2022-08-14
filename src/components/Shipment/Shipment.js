// import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';

// const Shipment = () => {
//     const [user] = useAuthState(auth);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [address, setAddress] = useState('');
//     const [phone, setPhone] = useState('');
//     const [error, setError] = useState('');
//     // const navigate = useNavigate();

//     const handleNameBlur = event =>{
//         setName(event.target.value);
//     }

//     const handleAddressBlur = event =>{
//         setAddress(event.target.value);
//     }

//     const handlePhoneBlur = event =>{
//         setPhone(event.target.value);
//     }

//     const handleCreateUser = event =>{
//         event.preventDefault();
//         const shipping = {name, email, address, phone};
//         console.log(shipping);
//     }

//     return (
//         <div className='form-container'>
//             <div>
//                 <h2 className='form-title'>Your Shipping Info</h2>
//                 <form onSubmit={handleCreateUser}>
//                     <div className="input-group">
//                         <label htmlFor="name">Your Name</label>
//                         <input onBlur={handleNameBlur} type="text" name="name" id="" required/>
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="email">Your Email</label>
//                         <input value={user?.email} readOnly type="email" name="email" id="" required/>
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="password">Address</label>
//                         <input onBlur={handleAddressBlur} type="text" name="address" id=""  required/>
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="phone">Phone Number</label>
//                         <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required/>
//                     </div>
//                     <p style={{color: 'red'}}>{error}</p>
//                     <input className='form-submit' type="submit" value="Add Shipping"  required/>
//                 </form>
                
//             </div>
//         </div>
//     );
// };

// export default Shipment;


import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {

    const [user1] = useAuthState(auth);
    const [email,setEmail] = useState('');
    const [phone,setPhoneNumber] = useState('');
    const [address,setAddress] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();
    
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    
    const handleNameBlur = event =>{
        setName(event.target.value);
    }
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    
    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }
    
    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhoneNumber(event.target.value);
    }
    
    if(user)
    {
        navigate('/shop');
    }
    
    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping = {name,email,address,phone};
        console.log(shipping);
     
    
    }

    
    return (
        <div className='form-container'>
        <form onSubmit={handleCreateUser}>
        <h2 className='form-title'>Shipping Information</h2>
         <div className="input-group">
             <label htmlFor="">Name</label>
             <input onBlur={handleNameBlur} type="text" name="name" required/>
         </div>
         <div className="input-group">
             <label htmlFor="">Email</label>
             <input value={user1?.email} readOnly type="email" name="email" required/>
         </div>
         <div className="input-group">
             <label htmlFor="password">Address</label>
             <input onBlur={handleAddressBlur} type="text" name="address" required/>
         </div>
         <div className="input-group">
             <label htmlFor="phone-number">Phone Number</label>
             <input onBlur={handlePhoneBlur} type="text" name="phone-number" required/>
         </div>

         <p style={{color:"red"}}>{error}</p>
         <input className='form-submit' type="submit" value="Add Shipping" />
       
        </form>
     </div>
    );
};

export default Shipment;
// DonationForm.js

// import React, { useEffect } from 'react';
// import './DonationForm.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DonationForm = () => {
//   useEffect(() => {
//     const form = document.getElementById('donateForm');

//     const donateNow = (e) => {
//       e.preventDefault();

//       // Use the FlutterWaveCheckout library to initiate the payment process
//       window.FlutterwaveCheckout({
//         public_key: 'FLWPUBK_TEST-7e56c7d5225d1a40a5c44a483a162955-X',
//         tx_ref: 'TXN_' + Math.floor(Math.random() * 1000000000 + 1),
//         amount: document.getElementById('amount').value,
//         currency: 'UGX',

//         customer: {
//           email: document.getElementById('email').value,
//           phonenumber: document.getElementById('phoneNumber').value,
//           name: document.getElementById('fullName').value,
//         },

//         callback: (data) => {
//           // specified callback function
//           const reference = data.tx_ref;
//           alert('Payment complete! Reference: ' + reference);
//         },

//         customizations: {
//           title: 'CEMIDS (Carbondioxide Emission Monitoring and Information Dissemination System)',
//           description: 'Payment Transaction with FlutterWave.',
//         },
//       });
//     };

//     form.addEventListener('submit', donateNow);

//     return () => {
//       // Clean up the event listener when the component unmounts
//       form.removeEventListener('submit', donateNow);
//     };
//   }, []);

//   return (
//     <div className='mb-3 donationbody'>
//     <div className="donation-card-container">
//       <h1>Please Fill this Form! </h1>
//       <hr />
//       <form action="" method="POST" id="donateForm">
//         <label htmlFor="fullName" className="form-label">Your Full Name</label>
//         <input type="text" className="form-control" id="fullName" placeholder="e.g. Muwanguzi Derrick" required />

//         <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
//         <input type="text" className="form-control" id="phoneNumber" placeholder="e.g. 0701731556" pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" required />

//         <label htmlFor="email" className="form-label">Email</label>
//         <input type="text" className="form-control" id="email" placeholder="e.g. derrickmk@gmail.com" required />

//         <label htmlFor="amount" className="form-label">Amount to Donate</label>
//         <input type="number" className="form-control" id="amount" placeholder="Enter amount in UGX here..." required />

//         <br/>
//         {/* <input type="submit" value="Continue" className="btn btn-success" /> */}
//         <button type="submit" class="btn btn-success">Continue</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default DonationForm;



import './DonationForm.css';
import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function Testpayment() {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    // Validate amount
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    // Parse amount as integer (Flutterwave expects integer amount in smallest currency unit)
    const amountInInteger = parseInt(amount);

    const config = {
      public_key: "FLWPUBK_TEST-7e56c7d5225d1a40a5c44a483a162955-X",
      tx_ref: Date.now(),
      amount: amountInInteger,
      currency: "UGX",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: email,
        phone_number: phone,
        name: name,
      },
      customizations: {
        title: 'CEMIDS (Carbondioxide Emission Monitoring and Information Dissemination System)',
        description: 'Donation Towards Climate Change',
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
    };

    const handleFlutterPayment = useFlutterwave(config);

    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        alert('Payment complete! Reference: ' + response.tx_ref);
        closePaymentModal();
      },
      onClose: () => {},
    });
  };

  return (
    <div className='mb-3 donationbody'>
      <div className="donation-card-container">
        <h1>Please Fill this Form! </h1>
        <hr />
        <form action="" method="POST" id="donateForm" onSubmit={handlePayment}>
          <label htmlFor="fullName" className="form-label">Your Full Name</label>
          <input type="text" className="form-control" id="fullName" placeholder="e.g. Muwanguzi Derrick" required onChange={(e) => setName(e.target.value)} />

          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" placeholder="e.g. 0701731556" pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" required onChange={(e) => setPhone(e.target.value)} />

          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" className="form-control" id="email" placeholder="e.g. derrickmk@gmail.com" required onChange={(e) => setEmail(e.target.value)}  />

          <label htmlFor="amount" className="form-label">Amount to Donate</label>
          <input type="number" className="form-control" id="amount" placeholder="Enter amount in UGX here..." required onChange={(e) => setAmount(e.target.value)} />

          <br/>
          {/* <button type="submit" className="btn btn-success">Continue</button> */}
        <input type="submit" value="Continue" className="btn btn-success" />

        </form>
      </div>
    </div>
  );
}
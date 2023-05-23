import React from 'react';
import bg from '../pic/0d3ede_40419dd1f6584779a8b78af7c1cbedad~mv2.webp'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const handleSubmit=event=>{
    event.preventDefault();
    const form = event.target;
    const AFFF=form.AFFF.value;
    const cancer=form.cancer.value;
    const case1 = form.case1.value;
    const firstname=form.firstname.value;
    const lastname=form.lastname.value;
    const email=form.email.value;
    const tel=form.tel.value;
    const zip=form.zip.value;
    const area=form.area.value;
    const data={
      AFFF,
      cancer,
      case1,
      firstname,
      lastname,
      email,
      tel,
      zip,
      area
    }
    console.log(data);
    fetch("https://sheet.best/api/sheets/2e6db18e-3134-4a18-ac57-07b54167f0b3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
        form.reset();
        toast.success('Successfully added to the sheet !', {
          position: toast.POSITION.TOP_RIGHT
      });
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  }
  
  return (
    <div id='home' style={{
      backgroundImage:`url(${bg})`,
    }} className="hero py-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:items-start">
          <div className="text-center lg:text-left lg:py-20">
            <h1 className="text-6xl font-bold">Firefighting Foam:</h1>
            <h1 className="text-5xl font-bold py-2">Lifesaving or Lethal?</h1>
            <p className="py-6 text-2xl">Just because civilians & service members use foam to save lives and property does not mean the substance itself is safe.</p>
            <p className="py-6 text-orange-600 font-bold">IF THAT ‘ACCEPTABLE RISK’ CAUSES YOU HARM, YOU MAY BE ABLE TO DO SOMETHING ABOUT IT.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className='text-center font-bold'>
                <h4>YOU MAY QUALIFY FOR SIGNIFICANT COMPENSATION</h4>
              </div>
              <hr />
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">How were you exposed to firefighting foam (AFFF)?</span>
                </label>
                <select name="AFFF" id="AFFF" className="input input-bordered" required>
                  <option selected disabled value='select'>--Select--</option>
                  <option value="Civilian Firefighter">Civilian Firefighter</option>
                  <option value="Military Firefighter">Military Firefighter</option>
                  <option value="Other military servicemember">Other military servicemember</option>
                  <option value="Airport Personnel">Airport Personnel</option>
                  <option value="Other Exposure">Other Exposure</option>
                  <option value="No Exposure">No Exposure</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Did you or a loved one develop any of the these cancers following the exposure?</span>
                </label>
                <select name="cancer" id="cancer" className="input input-bordered " required>
                  <option selected disabled value='select'>--Select--</option>
                  <option value="Kidney Cancer">Kidney Cancer</option>
                  <option value="Pancreatic Cancer">Pancreatic Cancer</option>
                  <option value="Testicular Cancer">Testicular Cancer</option>
                  <option value="Prostate Cancer">Prostate Cancer</option>
                  <option value="Bladder Cancer">Bladder Cancer</option>
                  <option value="Thyroid Cancer">Thyroid Cancer</option>
                  <option value="Thyroid Disease">Thyroid Disease</option>
                  <option value="Non-Hodgkin's Lymphoma">Non-Hodgkin's Lymphoma</option>
                  <option value="Liver Cancer">Liver Cancer</option>
                  <option value="Ulcerative Colitis">Ulcerative Colitis</option>
                  <option value="Other Cancer Diagnosis">Other Cancer Diagnosis</option>
                  <option value="No Cancer">No Cancer</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Do you already have an attorney representing this case?</span>
                </label>
                <select name="case1" id="case" className="input input-bordered" required>
                  <option selected disabled value='select'>--Select--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  
                </select>
              </div>
              <div className="form-control">
                <div className='lg:flex justify-between'>
                  <div>
                    <label className="label">
                      <span className="label-text font-medium">First Name</span>
                    </label>
                    <input name='firstname' type="text" placeholder="First Name" className="input input-bordered" required/>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Last Name</span>
                    </label>
                    <input name='lastname' type="text" placeholder="Last Name" className="input input-bordered" required />
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <div className='lg:flex justify-between'>
                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Phone Number</span>
                    </label>
                    <input name='tel' type="text" placeholder="123-45-678" className="input input-bordered"  required/>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Zip Code</span>
                    </label>
                    <input name='zip' type="text" placeholder="Zip Code" className="input input-bordered"  required/>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Please describe where the exposure took place & any other details (Optional)
                  </span>
                </label>
                <textarea name='area' className="textarea textarea-bordered" placeholder="Optional"></textarea>
              </div>
              <div className="form-control">
                <div className='flex'>
                  <input type="checkbox" className="checkbox mx-1" id="scales" name="scales" required/>
                  <label className='text-sm' for="scales">By checking this box and clicking the "Agree and Submit" button below, I represent that I am 18+ years of age and have read and agreed to the National Injury Bureau <span className='underline underline-offset-1 '>Terms and Conditions</span> and <span className='underline underline-offset-1 '>Privacy Policy;</span> I consent to the transfer of information that I provide on this site to third-party legal service providers and non-legal service providers, third party partners and their affiliates and service providers; I agree to be contacted by email & telephone, which may include artificial or pre-recorded calls and/or SMS text messages, delivered via automated technology, to the email and phone number that I have provided.</label>
                </div>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='Agree And Submit' />
              </div>
            </form>
          </div>
        </div>
        
      </div>
      
  );
};

export default Home;
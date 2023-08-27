import React from 'react';
import './Contact.css'; 
import { MDBBtn } from 'mdb-react-ui-kit';

const Contact = () => {
  const handleSubmit=(event)=>{
    event.preventDefault();
  }
  return (
    <div className='contact-container'>
      <h2 className='contact-title'>Contactez-nous</h2>
      <div className='row'>
        <div className='col-md-6'>
          <div className='contact-form'>
            <h4>Envoyez-nous un message</h4>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Nom</label>
                <input type='text' className='form-control' id='name' placeholder='Votre nom' />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' className='form-control' id='email' placeholder='Votre email' />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea className='form-control' id='message' rows='4' placeholder='Votre message'></textarea>
              </div>
              <div className="text-center" style={{ marginTop: "20px" }}>
              <MDBBtn type="submit" color="light" style={{ backgroundColor: "#98c4bf", color: "white" }}>
              Envoyer
          </MDBBtn>
        </div>
            </form>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='contact-info'>
            <h4>Coordonnées</h4>
            <p><strong>Adresse :</strong> Sousse,Tunisie</p>
            <p><strong>Téléphone :</strong> +216 234 567 89</p>
            <p><strong>Email :</strong> happypet@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

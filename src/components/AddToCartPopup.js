import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddToCartPopup = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Produit ajouté</Modal.Title>
      </Modal.Header>
      <Modal.Body>Le produit a été ajouté à votre panier.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddToCartPopup;

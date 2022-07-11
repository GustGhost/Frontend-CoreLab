import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import axios from 'axios';
import { base_URL } from '../../Constants/Base_URL';
import { useEffect } from 'react';

export const ModalComponent = () => {
  const [show, setShow] = useState(false);
  const [body, setBody] = useState({
    name: '',
    brand: '',
    color: '',
    year: '',
    min_price: '',
    max_price: '',
    license_plate: '',
    description: '',
  });

  const nameHandle = (e) => {
    setBody({ name: e.target.value });
  };
  const brandHandle = (e) => {
    setBody({ brand: e.target.value });
  };
  const colorHandle = (e) => {
    setBody({ color: e.target.value });
  };
  const yearHandle = (e) => {
    setBody({ year: e.target.value });
  };
  const minPriceHandle = (e) => {
    setBody({ min_price: e.target.value });
  };
  const maxPriceHandle = (e) => {
    setBody({ max_price: e.target.value });
  };
  const licensePlateHandle = (e) => {
    setBody({ license_plate: e.target.value });
  };
  const descriptionHandle = (e) => {
    setBody({ description: e.target.value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const request = async () => {
    const data = {
      name: body.name,
      brand: body.brand,
      color: body.color,
      year: body.year,
      min_price: body.min_price,
      max_price: body.max_price,
      license_plate: body.license_plate,
      description: body.description,
    };
    await axios
      .post(`${base_URL}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setBody({
          name: '',
          brand: '',
          color: '',
          year: '',
          min_price: '',
          max_price: '',
          license_plate: '',
          description: '',
        });
        alert('Carro Adicionado!');
        alert(res);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert(1 + err.response);
        } else if (err.request) {
          alert(2 + err.request);
        } else if (err.message) {
          alert(3 + err.message);
        }
        setBody({
          name: '',
          brand: '',
          color: '',
          year: '',
          min_price: '',
          max_price: '',
          license_plate: '',
          description: '',
        });
      });
  };
  useEffect(() => {
    request();
  }, []);

  return (
    <>
      <Button variant='primary' onClick={handleShow} color='#83e2d1'>
        + ADICIONAR
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p>
            Nome:
            <input type='text' onChange={nameHandle} />
          </p>
          <p>
            Marca:
            <input type='text' onChange={brandHandle} />
          </p>
          <p>
            Cor:
            <input type='text' onChange={colorHandle} />
          </p>
          <p>
            Ano:
            <input type='text' onChange={yearHandle} />
          </p>
          <p>
            Placa:
            <input type='text' onChange={licensePlateHandle} />
          </p>
          <p>
            Preço Máximo:
            <input type='text' onChange={maxPriceHandle} />
          </p>
          <p>
            Preço Mínimo:
            <input type='text' onChange={minPriceHandle} />
          </p>
          <p>
            Descrição:
            <input type='text' onChange={descriptionHandle} />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Fechar
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              request();
            }}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

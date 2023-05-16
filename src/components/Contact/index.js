<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import { Input, TextArea } from './FormControlled/Input'
import { FormValidations } from './FormControlled/FormValidations';
import { ValidationError } from 'yup';
import emailjs from '@emailjs/browser';
import ReactDOM from "react-dom";
import { useFormik } from "formik";

import  {FaInstagram, FaWhatsapp, FaTelegramPlane, FaRegEnvelope, FaCheck } from 'react-icons/fa';
import './assets/css/style.min.css';


    const initialForm = {
        name: '',
        email: '',
        celular: '',
        mensagem: '',
    };


const Contact = () => {

    const [forms, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    useEffect(() => {Validate()},[forms]);

    const Validate = async () =>{
        try{
            await FormValidations.validate(forms, { abortEarly: false })
            setErrors({});
        }catch(e){
            if(e instanceof ValidationError){
                const errors = {}
                e.inner.forEach((key) => {
                    errors[key.path] = key.message
                })
                setErrors(errors);
            }
        }
    }


    const setInput = (newValue)=>{
        setForm(form =>({...form, ...newValue}))
    };

    const setTextArea = (newValue)=>{
        setForm(form =>({...form, ...newValue}))
    };

    const form = useRef();


    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm('service_7qgczb9', 'template_8jiryc4', form.current, 'E7s48j3b_Fiw7OCwz')
        .then((result) => {
            
            const elementSuccess = document.getElementById("msg-success");
            var cont = "Mensagem enviada com sucesso!";
            elementSuccess.innerHTML = cont;
            elementSuccess.classList.remove('obj-hiden');

            setTimeout(function(){ 
                elementSuccess.classList.add('obj-hiden');
            }, 5000);
        }, (error) => {

            const elementError = document.getElementById("msg-error");
            var cont = "Erro no Envio da mensagem!";
            elementError.innerHTML = cont;
            elementError.classList.remove('obj-hiden');

            setTimeout(function(){ 
                elementError.classList.add('obj-hiden');
            }, 5000);
            
            
        
        });
        e.target.reset();
    }


    return (

            <section className="contato">
                <div className="container">
                    <h2 className="section-title">Contato</h2>
                    <div className="icons-contato">
                        <div className="icon-groups">
                            <a href="https://www.instagram.com/jeferventura" rel="_blank" >
                                <FaInstagram className="icon" /> <p>jeferventura</p>
                            </a>
                        </div>
                        <div className="icon-groups">
                            <a href="mailto:jeferventura@gmail.com"  rel="_blank" >
                                <FaRegEnvelope className="icon" /> <p>jefersonventura91@gmail.com</p>
                            </a>
                        </div>
                        <div className="icon-groups">
                            <a href="https://wa.me/message/AJJJGGAIOG5PP1" rel="_blank" >
                                <FaWhatsapp className="icon"  /> <p>+55 71 9 9264-7669</p>
                            </a>
                        </div>
                        <div className="icon-groups"> 
                            <a href="https://t.me/jeferventura" rel="_blank" >
                                <FaTelegramPlane className="icon" />  <p>+55 71 9 9264-7669</p>
                            </a>
                        </div>
                    </div>
                    <p className="send-menssage-sucess obj-hiden" id="msg-success"></p>
                    <p className="send-menssage-error obj-hiden" id="msg-error"></p>
                    <span className="text-error" id="text-error"></span>
                    <form className="form-contato" id="form-contato"  ref={form} onSubmit={sendEmail}>
                        <Input 
                            name="nome"
                            type="text"
                            onChange={e => setInput({name: e.target.value })}
                            label="Nome"
                            placeholder="Digite seu nome"
                            error={errors.name}
                        />

                        <div className="form-box-group">
                        <Input 
                            name="e-mail"
                            type="email"
                            onChange={e => setInput({email: e.target.value })}
                            label="E-mail"
                            placeholder="informe o seu e-mail"
                            error={errors.email}
                        />
                        <Input 
                            name="celular"
                            type="text"
                            onChange={e => setInput({celular: e.target.value })}
                            label="Celular"
                            placeholder="(xx) x xxxx-xxxx"
                            error={errors.celular}
                        />
                        </div>
                        <TextArea 
                            name="mensagem"
                            onChange={e => setTextArea({mensagem: e.target.value })}
                            label="Mensagem"
                            placeholder="Dgite sua mensagem"
                            error={errors.mensagem}
                        />
                        <div className="form-group align-button">
                            <button type="submit" className="btn"><FaCheck className="icon"/> Enviar </button>
                        </div>
                    </form>
                </div>
            </section>

        
    );
    
}

export default Contact;
=======
import React, { useState, useRef, useEffect } from "react";
import { Input, TextArea } from "./FormControlled/Input";
import { FormValidations } from "./FormControlled/FormValidations";
import { ValidationError } from "yup";
import emailjs from "@emailjs/browser";

import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaRegEnvelope,
  FaCheck,
} from "react-icons/fa";
import "./assets/css/style.min.css";

const initialForm = {
  name: "",
  email: "",
  celular: "",
  mensagem: "",
};

const Contact = () => {
  const [forms, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    Validate();
  }, [forms]);

  const Validate = async () => {
    try {
      await FormValidations.validate(forms, { abortEarly: false });
      setErrors({});
    } catch (e) {
      if (e instanceof ValidationError) {
        const errors = {};
        e.inner.forEach((key) => {
          errors[key.path] = key.message;
        });
        setErrors(errors);
      }
    }
  };

  const setInput = (newValue) => {
    setForm((form) => ({ ...form, ...newValue }));
  };

  const setTextArea = (newValue) => {
    setForm((form) => ({ ...form, ...newValue }));
  };

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7qgczb9",
        "template_8jiryc4",
        form.current,
        "E7s48j3b_Fiw7OCwz"
      )
      .then(
        (result) => {
          const elementSuccess = document.getElementById("msg-success");
          var cont = "Mensagem enviada com sucesso!";
          elementSuccess.innerHTML = cont;
          elementSuccess.classList.remove("obj-hiden");

          setTimeout(function () {
            elementSuccess.classList.add("obj-hiden");
          }, 5000);
        },
        (error) => {
          const elementError = document.getElementById("msg-error");
          var cont = "Erro no Envio da mensagem!";
          elementError.innerHTML = cont;
          elementError.classList.remove("obj-hiden");

          setTimeout(function () {
            elementError.classList.add("obj-hiden");
          }, 5000);
        }
      );
    e.target.reset();
  }

  return (
    <section className="contato">
      <div className="container">
        <h2 className="section-title">Contato</h2>
        <div className="icons-contato">
          <div className="icon-groups">
            <a href="mailto:jeferventura@gmail.com" rel="_blank">
              <FaRegEnvelope className="icon" />{" "}
              <p>jefersonventura91@gmail.com</p>
            </a>
          </div>
          <div className="icon-groups">
            <a href="https://wa.me/5571992647669" rel="_blank">
              <FaWhatsapp className="icon" /> <p>+55 71 9 9264-7669</p>
            </a>
          </div>
          <div className="icon-groups">
            <a href="https://t.me/jvssantos" rel="_blank">
              <FaTelegramPlane className="icon" /> <p>+55 71 9 9264-7669</p>
            </a>
          </div>
        </div>
        <p className="send-menssage-sucess obj-hiden" id="msg-success"></p>
        <p className="send-menssage-error obj-hiden" id="msg-error"></p>
        <span className="text-error" id="text-error"></span>
        <form
          className="form-contato"
          id="form-contato"
          ref={form}
          onSubmit={sendEmail}
        >
          <Input
            name="nome"
            type="text"
            onChange={(e) => setInput({ name: e.target.value })}
            label="Nome"
            placeholder="Digite seu nome"
            error={errors.name}
          />

          <div className="form-box-group">
            <Input
              name="e-mail"
              type="email"
              onChange={(e) => setInput({ email: e.target.value })}
              label="E-mail"
              placeholder="informe o seu e-mail"
              error={errors.email}
            />
            <Input
              name="celular"
              type="text"
              onChange={(e) => setInput({ celular: e.target.value })}
              label="Celular"
              placeholder="(xx) x xxxx-xxxx"
              error={errors.celular}
            />
          </div>
          <TextArea
            name="mensagem"
            onChange={(e) => setTextArea({ mensagem: e.target.value })}
            label="Mensagem"
            placeholder="Dgite sua mensagem"
            error={errors.mensagem}
          />
          <div className="form-group align-button">
            <button type="submit" className="btn">
              <FaCheck className="icon" /> Enviar{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
>>>>>>> b70aabc163db74fa5031d4c57eb245a5aab82f1a

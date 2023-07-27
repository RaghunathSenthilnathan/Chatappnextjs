"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Interface } from "readline";

const Register = () => {

  const handleSubmit = (e : any) => {
    e.preventDefault();
    alert("form");
  };

  const handleChange = () => {};
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <Image src="/assets/logo.svg" height={100} width={100} alt="Logo" />
            {/* <img src="/assets/logo.svg" height={100} width={100} alt="logo" /> */}
            <h1>let&apos;s chat</h1>
            <input
              type="text"
              placeholder="Username"
              name="Username"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="Password"
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
            />
            <button type="submit"> Create User</button>
            <span>
              
              already have an account?<Link href="/login">&nbsp;Login</Link>
            </span>
          </div>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color:#997af0;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    margin-left:1.25em; 
    display:inline-block;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
      &:hover {
        text-transform: uppercase;
      }
    }
  }
`;

export default Register;

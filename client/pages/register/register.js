
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from 'next/image'


const register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form");
  };

  const handleChange = () =>{}
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <Image src="" alt="" />
            <hl>snappy</hl>
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
            <button type = "submit" > Create User</button>
      <span> already have an account?<Link href="/login">Login</Link></span>
          </div>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div``;

export default register;

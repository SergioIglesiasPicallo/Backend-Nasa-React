import styled from "styled-components";

export const CustomNavbar = styled.nav`
    background-color:black;
    display:flex;
    justify-content:space-between;
    height:60px;
    width: 100%;
    font-style: oblique;
`
export const BackButton = styled.button`
    width: 40px;
    height: 30px;
    border-radius: 5px;
    margin:10px;
    font-style: oblique;
    cursor:pointer;
    color:red;
    backgroun-color:red;
`


export const Signout = styled.button`
    width: 100px;
    height: 30px;
    font-style: oblique;
    border-radius: 5px;
    padding: 30px;
    margin:10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-transform: uppercase;
    font-weight:bold;
    cursor:pointer;
    background-color:black;
`

export const BLogout = styled.button`
    width: 120px;
    height: 30px;
    font-style: oblique;
    border-radius: 5px;
    margin:10px;
    cursor:pointer;
    color: purple;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight:bold;
    border: none;
`
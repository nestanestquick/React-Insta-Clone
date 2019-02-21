import React from 'react'
import styled from 'styled-components';

const Header  = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	width: 50%;
	margin: 117px auto;
	border: 2px solid darkgrey;
	border-radius: 28px;
	height: 150px;
	background: lightblue;

`;
const BoxLogin = styled.div`
	margin-top: 20px;
	font-family: Double Struck
	color: darkblue;
	& span h4 > {
		color: black;
	} 
	
`
const Button = styled.button`
  	color: blue;
  	font-size: 1em;
	margin: 12px; 
  	padding: 0.1em;
  	border: 2px solid darkgray;
	border-radius: 3px;
	 
`;  

const Login = props => {
	return (
			<Header >
				<BoxLogin><span><h4>Please Login</h4></span>
				<form>
					<input type="text" placeholder="UserName"/>
					<input type="password" placeholder="Password"/>
				</form>
				<Button onClick = {props.loggingInInsta}>LOGIN</Button>
				</BoxLogin>
			</Header >
		
	)
}

export default Login;
import React from 'react';
import styled from 'styled-components' 

const UploaderSuccessContainer = styled.div`
    display: block;
    position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
    background-color:white;
    color:#333333;
    border-radius: 20px;
    box-shadow: 4px 10px 10px lightgray;
    width: 500px;
    height: 600px;
    padding: 20px 5px;
`

const Title = styled.div`
    color: black;
    font-size: 25px;
    margin: 15px;
`

const Legend = styled.div`
    color: gray;
    font-style: italic;
    margin: 15px;
`

const UploadedImage = styled.div`
    margin: 15px auto;
    background-color: gray;
    width: 400px;
    height: 400px;
`

const Button = styled.a`
  display: inline-block;
  border-radius: 7px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 10rem;
  background: blue;
  color: white;
  border: 2px solid blue;
`

const UploaderSuccess = () => {
    return (
        <UploaderSuccessContainer>
            <Title>Uploaded successfully !</Title>
            <UploadedImage />  
            <div className="link-zone"> 
                Link
            </div> 
        </UploaderSuccessContainer>
    )
}

export default UploaderSuccess;
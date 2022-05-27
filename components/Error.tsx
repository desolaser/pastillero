import React from 'react';
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon
} from "@chakra-ui/react";

type ErrorProps = {
  title: string,
  text?: string
}

const Error = ({ title, text }: ErrorProps) => (
  <Alert status='error'>
    <AlertIcon />
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>{text}</AlertDescription>
  </Alert>
);

export default Error;
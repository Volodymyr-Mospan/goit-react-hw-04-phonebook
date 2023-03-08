import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 400px;

  padding: 15px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled(Field)`
  padding: 5px 25px;
  border-radius: 10px;

  font-size: 20px;
`;

export const ErrorMessageStyled = styled.p`
  position: absolute;
  top: 105%;
  left: 10px;

  width: 500px;

  font-size: 14px;
  color: red;
`;

export const FormBtn = styled.button`
  width: 150px;
  margin-top: 20px;
  padding: 10px 25px;
  /* border-radius: 10px; */
  cursor: pointer;
`;

export const FilterLabel = styled(Label)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
`;

export const FilterInput = styled.input`
  padding: 10px 25px;
  border-radius: 10px;
  width: 400px;
`;

export const ContactListStyled = styled.ul`
  padding: 0 50px 0 15px;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 5px;
`;

export const ContactStyled = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 20px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 8px;
    margin-right: 20px;
    background-color: black;
  }
`;

export const ContactBtn = styled.button`
  margin-left: auto;
  padding: 5px 25px;
  border-radius: 0 13px 13px 0;
  cursor: pointer;
`;

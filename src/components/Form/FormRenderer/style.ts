import styled from 'styled-components';

const FormIkWrapper = styled.section`
  .formik_container {
    transition: 0.3s, background-size 0.3s 0.3s;
    border-left: 5px solid #dedede;
    & > label {
      font-size: 14px;
      padding-bottom: 7.5px;
      color: #3f50b5;
    }
    input[type='text'],
    textarea {
      border: 1px solid #dedede;
      margin-bottom: 7.5px;
      padding: 5px;
      font-size: 14px;
      &:focus {
        outline: none;
      }
    }
    &.has_error {
      border-left: 5px solid red;
      input {
        transition: 0.3s, background-size 0.3s 0.3s;
        border: 1px solid red;
      }
      ._error {
        color: red;
        font-size: 14px;
      }
    }
  }
`;

export default FormIkWrapper;

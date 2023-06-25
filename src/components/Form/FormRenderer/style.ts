import styled from 'styled-components';

const FormIkWrapper = styled.section`
  .formik_container {
    border-left: 5px solid #dedede;
    label {
      font-size: 16px;
      padding-bottom: 7.5px;
    }
    input {
      border: 2px solid #dedede;
      margin-bottom: 7.5px;
      padding: 5px;
      &:focus {
        outline: none;
      }
    }
    .error {
    }
  }
`;

export default FormIkWrapper;

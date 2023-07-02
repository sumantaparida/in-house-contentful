import styled from 'styled-components';

const ContentModelWrapper = styled.div`
  //height: calc(100vh - 77px);
  ._content_wrapper {
    //height: calc(100vh - 133px);
    overflow: auto;
  }

  ._r_box {
    //overflow: auto;
    border-left: 1px solid #cbd5e0;
    table {
      width: 100%;
      text-align: left;
      position: relative;
      display: table;
      thead {
        display: table-header-group;
        border: 0;
        th {
          background-color: white;
          position: sticky;
          top: -0.25rem;
          border: 0;
          padding: 0;
          z-index: 99;
          &:nth-child(2) {
            //width: 10%;
          }
          & > div {
            border-bottom: 1px solid #cbd5e0;
            padding: 9.9px;
            color: rgb(90, 101, 124);
          }
        }
      }
      tbody {
        tr {
          border-bottom: 1px solid #cbd5e0;
          &:hover {
            background-color: #edf2f7;
            cursor: pointer;
          }
          td {
            &:nth-child(1) {
              width: 40px;
              color: rgb(17, 27, 43);
              font-weight: 600;
              & > div {
              }
            }

            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4) {
              padding: 9.9px;
            }
            &:nth-last-child(1) {
              width: 66px;
            }
          }
        }
      }
    }
  }
`;

export default ContentModelWrapper;

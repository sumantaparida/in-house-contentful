import styled from 'styled-components';

const ContentWrapper = styled.div`
  height: calc(100vh - 77px);
  ._content_wrapper {
    height: calc(100vh - 133px);
    overflow: auto;
  }
  ._l_box {
    width: 300px;
  }
  ._r_box {
    overflow: auto;
    border-left: 1px solid #cbd5e0;
    table {
      width: 100%;
      text-align: left;
      position: relative;
      display: table;
      table-layout: fixed;
      thead {
        display: table-header-group;
        border: 0;
        th {
          background-color: white;
          position: sticky;
          top: -1.25rem;
          border: 0;
          padding: 0;
          z-index: 99;
          & > div {
            border-bottom: 1px solid #cbd5e0;
            padding: 9.9px;
          }
          &.first {
            width: 39px;
            & > div {
              padding: inherit;
            }
          }
          &.last {
            width: 66px;
            text-align: center;
            & > div {
              padding: 8.9px;
            }
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:nth-child(1) {
              width: 40px;
              & > div {
              }
            }
            &:nth-child(2) {
              width: 25%;
            }
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4),
            &:nth-child(5),
            &:nth-child(6) {
              padding: 9.9px;
            }
            &:nth-last-child(1) {
              width: 66px;
              text-align: center;
            }
          }
        }
      }
    }
  }
  ._profile {
    width: 25px;
    height: 25px;
  }
`;

export default ContentWrapper;

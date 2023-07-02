import styled from 'styled-components';

const ContentDetailsWrapper = styled.div`
  height: calc(100vh - 77px);
  ._content_wrapper {
    height: calc(100vh - 133px);
    overflow: auto;
  }
  ._l_box {
    width: 300px;
    border-left: 1px solid #cbd5e0;
    border-top: 1px solid #cbd5e0;
  }
  ._r_box {
    overflow: auto;
    border-left: 1px solid #cbd5e0;
  }
  ._c_sub_nav {
    border-top: 1px solid #cbd5e0;
    border-bottom: 1px solid #cbd5e0;
    padding: 0px 16px 9px 16px;
  }

  .publish_button {
    background-color: #dedede;
    border: 1px solid #000000;
  }
`;

export default ContentDetailsWrapper;

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
                        // padding: 6px;
                        &.first {
                            width: 40px;
                        }
                        &.secound {
                            width: 25%;
                        }
                        &.last {
                            width: 66px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
`;

export default ContentWrapper;

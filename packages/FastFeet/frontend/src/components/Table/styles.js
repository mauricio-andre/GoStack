import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  border-collapse: separate;
  border-spacing: 0 2rem;

  thead th {
    color: #444444;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: left;
    padding: 0 2rem;
  }

  tbody tr {
    background: #ffffff;
  }
  tbody td {
    font-size: 1.6rem;
    line-height: 1.6rem;
    padding: 1rem 2rem;
    color: #666666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 0px;
  }

  tbody td:first-child {
    border-radius: 0.4rem 0 0 0.4rem;
  }

  tbody td:last-child {
    border-radius: 0 0.4rem 0.4rem 0;
  }
`;

import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  border-collapse: collapse;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => {
    return theme.colors.whiteColor;
  }};
  margin-left: auto;
  margin-right: auto;
  min-width: 50%;

  th,
  td {
    padding: 10px;
    text-align: center;
  }

  th:not(:last-child),
  td:not(:last-child) {
    border-right: 1px solid rgba(232, 232, 232);
  }

  tbody {
    color: rgb(84, 93, 99);
  }

  tbody tr:nth-child(even) {
    background-color: #ffffff;
  }

  tbody tr:nth-child(odd) {
    background-color: rgb(236, 242, 244);
  }

  tbody tr td:first-child {
    text-transform: capitalize;
  }
`;

export const Thead = styled.thead`
  background: #1fbdd4;
  text-transform: uppercase;
`;

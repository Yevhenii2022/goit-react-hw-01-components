import styled from '@emotion/styled';

export const FrListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => {
    return theme.colors.whiteColor;
  }};

  :not(:last-child) {
    margin-bottom: 12px;
  }

  img {
    margin-right: 20px;
  }
`;

export const Status = styled.span`
  height: 20px;
  width: 20px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.status ? 'green' : 'red';
  }};
`;

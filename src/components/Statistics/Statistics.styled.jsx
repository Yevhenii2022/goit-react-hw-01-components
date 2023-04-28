import styled from '@emotion/styled';

export const StatSection = styled.section`
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  max-width: 360px;
`;

export const Title = styled.h2`
  color: #545d63;
  margin: 0;
  padding: 40px;
  text-align: center;
  text-transform: uppercase;
  background-color: ${({ theme }) => {
    return theme.colors.whiteColor;
  }};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding-left: 0;
`;

export const StatItem = styled.li`
  align-items: center;
  background-color: #eee;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-weight: 500;
  padding: 15px;
  text-align: center;
`;

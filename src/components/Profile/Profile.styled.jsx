import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: #929eaa;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 280px;
  background-color: ${({ theme }) => {
    return theme.colors.whiteColor;
  }};
`;

export const ProfileName = styled.p`
  color: #2f3c4c;
  font-size: 18px;
  font-weight: 700;
  margin-top: 25px;
`;

export const ProfileText = styled.p`
  margin-bottom: 0;
  margin-top: 10px;
`;

export const Description = styled.div`
  padding: ${props => props.theme.spacing(8)};
`;

export const ProfileList = styled.ul`
  background-color: #f3f6f9;
  border-top: 1px solid #e4e9f0;
  display: flex;
  margin: 0;

  & > li {
    padding: 25px 15px;
    width: calc(100% / 3);
  }

  & > li:not(:last-child) {
    border-right: 1px solid rgb(228, 233, 240);
  }
`;

export const Quantity = styled.span`
  color: #2f3c4c;
  display: block;
  font-weight: 700;
  margin-top: 2px;
`;

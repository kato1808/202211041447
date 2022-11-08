import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img height={160} width={160} src={user.img} alt={user.name} />
      <p> {user.name} </p>
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>電話</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>ホームページ</dt>
        <dd>{user.website}</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 70px;
    padding-bottom: 8px;
  }
`;

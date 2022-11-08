import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://www.pasco.co.jp/calendar/images/PASCO_2022-11_1920x1080.jpg"
        alt="プロフィール"
      />
      <p>名前</p>
      <SDl>
        <dt>メール</dt>
        <dd>123456@pasco.com</dd>
        <dt>電話</dt>
        <dd>080-1074-7397</dd>
        <dt>会社名</dt>
        <dd>株式会社パスコ</dd>
        <dt>ホームページ</dt>
        <dd>https:pasco.com</dd>
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

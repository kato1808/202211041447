import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { childen } = props;
  return (
    <>
      <Header />
      {childen}
    </>
  );
};

import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SCotainer>
      <Input placeholder="検索条件を入力！！" />
      <SBouttnWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SBouttnWrapper>
    </SCotainer>
  );
};

const SCotainer = styled.div`
  display: flex;
  align-items: center;
`;

const SBouttnWrapper = styled.div`
  padding-left: 8px;
`;

import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "加藤裕幸",
  img: "https://www.pasco.co.jp/calendar/images/PASCO_2022-11_1920x1080.jpg",
  email: "123456@pasco.com",
  phone: "080-12345-1235",
  company: {
    name: "テスト株式会社"
  },
  website: "https://goole.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト!</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

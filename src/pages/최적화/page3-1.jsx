import { useState } from "react";
import { users } from "../../../../Mobi_1eek/src/__mock__/q1_mock";
import OneUser from "./oneUser";

const Page3Q = () => {
  const [mockdata, setMockdata] = useState(users);
  //   console.log(mockdata);
  const onSubmitAdd = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const nickName = e.target.nickName.value;
    const age = e.target.age.value;
    // console.log(nickName, age);
    // 값은 가져와지고 이제 추가를 누르면 기존의 값을 복사하고 그뒤에 추가할 객체를 붙여..
    const newaddlist = {
      id: Math.floor(Math.random() * 10000),
      name,
      nickName,
      age,
    };
    setMockdata([...mockdata, newaddlist]);
  };
  return (
    <>
      <>
        <form onSubmit={onSubmitAdd}>
          <input name="name" />
          <input name="nickName" />
          <input name="age" />
          <button>추가</button>
        </form>
        {mockdata.map((list, index) => (
          <OneUser
            key={index}
            list={list}
            mockdata={mockdata}
            setMockdata={setMockdata}
          />
        ))}
      </>
    </>
  );
};
export default Page3Q;

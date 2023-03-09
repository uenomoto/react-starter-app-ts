import { FC, memo, useEffect } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  //カスタムフック呼び出し
  const { getusers, loading, users } = useAllUsers();
  // ↓useEffectすることでuser取得を１マウントのみにできるよってパフォーマンス向上できる（N＋1問題）
  useEffect(() => getusers(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <>
          <Wrap p={{ base: 4, md: 10 }} justify="center">
            <UserCard
              imageUrl={"https://source.unsplash.com/random"}
              userName={"ここちゃん"}
              fullName={"ueno CoCo"}
            />
            {users.map((user) => (
              <WrapItem key={user.id}>
                <UserCard
                  imageUrl={"https://source.unsplash.com/random"}
                  userName={user.username}
                  fullName={user.name}
                />
              </WrapItem>
            ))}
          </Wrap>
        </>
      )}
    </>
  );
});

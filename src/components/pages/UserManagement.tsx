import { FC, memo, useCallback, useEffect } from "react";
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  //カスタムフック呼び出し
  const { getusers, loading, users } = useAllUsers();
  // ↓useEffectすることでuser取得を１マウントのみにできるよってパフォーマンス向上できる（N＋1問題）
  useEffect(() => getusers(), []);

  // モーダルに使うステート↓
  const { isOpen, onOpen, onClose } = useDisclosure();

  // クリックしたらモーダルがオープンする↓
  const onClickUser = useCallback(() => onOpen(), []);

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
              onClick={onClickUser}
            />
            {users.map((user) => (
              <WrapItem key={user.id}>
                <UserCard
                  imageUrl={"https://source.unsplash.com/random"}
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
          </Wrap>
          <UserDetailModal isOpen={isOpen} onClose={onClose} />
        </>
      )}
    </>
  );
});

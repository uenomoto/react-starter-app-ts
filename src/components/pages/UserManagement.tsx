import { FC, memo, useCallback, useEffect } from "react";
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  //カスタムフック呼び出し
  const { getusers, loading, users } = useAllUsers();
  // ↓useEffectすることでuser取得を１マウントのみにできるよってパフォーマンス向上できる（N＋1問題）
  useEffect(() => getusers(), []);

  // モーダルに使うステート↓
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { onSelectUser, selectUser } = useSelectUser();

  // クリックしたらモーダルがオープンする↓
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <>
          <Wrap p={{ base: 4, md: 10 }} justify="center">
            {users.map((user) => (
              <WrapItem key={user.id}>
                <UserCard
                  id={user.id}
                  imageUrl={"https://source.unsplash.com/random"}
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
          </Wrap>
          <UserDetailModal
            isOpen={isOpen}
            onClose={onClose}
            user={selectUser}
          />
        </>
      )}
    </>
  );
});

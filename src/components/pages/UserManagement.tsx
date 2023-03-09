import { FC, memo } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl={"https://source.unsplash.com/random"}
          userName={"ここちゃん"}
          fullName={"ueno CoCo"}
        />
      </WrapItem>
    </Wrap>
  );
});

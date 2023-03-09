import { FC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

// 型
type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo(
  ({ children, disabled = false, loading = false, onClick }) => {
    console.log(disabled);
    return (
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: "0.8" }}
        isDisabled={disabled || loading}
        isLoading={loading}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
);

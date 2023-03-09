import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

// APIで引っ張ってきた情報
export const useAuth = () => {
  // ↓遷移することができるReact Hook
  const history = useHistory();

  // トーストのカスタムフック！↓
  const { showMessage } = useMessage();

  // ローディングフラグ↓
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          showMessage({
            title: "ログインしました！",
            status: "success",
          });
          history.push("/home");
        } else {
          showMessage({
            title: "ユーザーいないよう",
            status: "error",
          });
        }
      })
      .catch(() => {
        showMessage({
          title: "ログインできません",
          status: "error",
        });
      })
      // ↓ここでロードが終わったら終了させてる
      .finally(() => setLoading(false));
  }, []);
  //     カスタムフック↓
  return { login, loading };
};

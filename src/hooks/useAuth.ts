import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { User } from "../types/api/user";

// APIで引っ張ってきた情報
export const useAuth = () => {
  const history = useHistory();
  // ローディングフラグ↓
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          history.push("/home");
        } else {
          alert("ユーザーいないよう");
        }
      })
      .catch(() => alert("エラーです"))
      // ↓ここでロードが終わったら終了させてる
      .finally(() => setLoading(false));
  }, []);
  //     カスタムフック↓
  return { login, loading };
};

import { useEffect, useState } from "react"
import axios from "axios"
import { tokenContext } from "../shared/context/tokenContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IUserData, meRequest, meRequestAsync, meRequestError, meRequestSuccess } from "../store/me/action";
import { saveToken } from "../store/saveToken";




export function useUserData() {
 /*  const [data, setData] = useState<IUserData>({}) */
  /* const token = useContext(tokenContext) */
  const data = useSelector<RootState, IUserData>(state => state.me.data)
  const loading = useSelector<RootState, boolean>(state => state.me.loading)

  const token = useSelector<RootState, string>(state => state.token)
  const dispatch = useDispatch()

      //@ts-ignore
      dispatch(saveToken())

  useEffect(() => {
    if (!token) return
    //@ts-ignore
    dispatch(meRequestAsync())
  }, [token])
  return {data, loading}
}
import { useDispatch } from "react-redux";
import { actions } from "../store/favorites/favorites.slice";
import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userSlice } from "../store/user/user.slice";
import * as userActions from '../store/user/user.actions'

const rootActions = {
    ...actions,
    ...userActions,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() =>
        bindActionCreators(rootActions, dispatch), [dispatch])
}
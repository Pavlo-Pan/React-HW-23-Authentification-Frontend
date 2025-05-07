export const selectAuthSuccess = store => store.auth.success;

export const selectIsLogin = store => {
    const { token, user } = store.auth;
    return Boolean(token) && Boolean(user);
}
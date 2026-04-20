import { UserManager, WebStorageStateStore } from 'oidc-client-ts';

const settings = {
    authority: 'https://localhost:44319',
    client_id: 'react_app',
    redirect_uri: 'http://localhost:3000/callback',
    silent_redirect_uri: 'http://localhost:3000/silent-callback',
    post_logout_redirect_uri: 'http://localhost:3000',
    response_type: 'code',
    scope: 'openid offline_access api1',
    userStore: new WebStorageStateStore({ store: window.localStorage })
};

export const userManager = new UserManager(settings);

export const login = () => userManager.signinRedirect();
export const logout = async () => {
    await userManager.removeUser();
    window.location.replace('/');
};
export const getUser = () => userManager.getUser();

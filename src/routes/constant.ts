export const PUBLIC_ROUTES = {
  AUTH_PAGE: "/auth",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: `/auth/confirm`,
  SIGNIN: "/signin",
};

export const PRIVATE_ROUTES = {
  ALL_CONTRACTS: "/",
  CREATE_CONTRACT: "/create",
  VIEW_CONTRACT: "/contract/:buyerId",
  UPDATE_CONTRACT: "/update/:buyerId",
};

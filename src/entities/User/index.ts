export { initAuthData } from "./model/services/initAuthData";

export { saveJsonSettings } from "./model/services/saveJsonSettings";

export { getUserInited } from "./model/selector/getUserInited/getUserInited";
export { getUserAuthData } from "./model/selector/getUserAuthData/getUserAuthData";
export { UserRole } from "./model/consts/userConsts";
export type { User, UserSchema } from "./model/types/user";
export { userReducer, userActions } from "./model/slice/userSlece";
export {
  isUserAdmin,
  isUserManager,
  getUserRoles,
} from "./model/selector/roleSelectors";
export { useJsonSettings } from "./model/selector/jsonSettings";

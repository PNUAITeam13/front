//
// import {useUserStore} from "../store/userStore";
//
//
// const usePermissions = () => {
//     const isRoot = useUserStore(state => state.user)?.role?.name === "ROLE_SUPER_ADMIN";
//     const isUser = useUserStore(state => state.user)?.role?.name === 'ROLE_USER';
//
//     const userPermissions = useUserStore(state => state.user)?.permissions?.map((el: any) => el?.technical_name) ?? [];
//
//
//     const hasPermission = (permission: string, userRule = false) => { // userRule = true -> user can access
//         if (isRoot) return true;
//         if (userRule && isUser) return true;
//         if (isUser) return false;
//         if (userPermissions.includes(permission)) return true;
//
//         return false;
//     }
//
//
//     return {
//         hasPermission,
//         isUser
//     }
// }
//
// export default usePermissions

export {}
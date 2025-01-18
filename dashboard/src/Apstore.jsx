import {create} from 'zustand';
import {persist} from "zustand/middleware";


//persist for storin datab in localstorage
let appstore =(set) => ({
    dopen:true,
    updateOpen:(dopen) =>set((state)=>({dopen:dopen})),

});
appstore =persist(appstore , {name:"my_app_store"});
export const useAppStore = create(appstore);
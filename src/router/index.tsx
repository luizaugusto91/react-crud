import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { ButtonTabsRoutes } from "./button-tabs.routers"

// Contexto
//import { StackRoutes } from "./stack.routers"
//import { ButtonTabsRoutes } from "./button-tabs.routers"
//import { DrawerRoutes } from "./drawer.routers"

export function RoutesTab() {
    return (
        <ButtonTabsRoutes />
    )
}
import {getFromContainer} from "../container";
import {Connection} from "./Connection";
import {ConnectionManager} from "./ConnectionManager";

export function getConnection(connectionName: string = "default"): Connection {
    return getConnectionManager().get(connectionName);
}

export function getConnectionManager(): ConnectionManager {
    return getFromContainer(ConnectionManager);
}
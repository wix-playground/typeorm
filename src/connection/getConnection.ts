import {getFromContainer} from "../container";
import { ConnectionManager, Connection } from "..";

export function getConnection(connectionName: string = "default"): Connection {
    return getConnectionManager().get(connectionName);
}

export function getConnectionManager(): ConnectionManager {
    return getFromContainer(ConnectionManager);
}
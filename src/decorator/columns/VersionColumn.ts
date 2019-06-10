import {getMetadataArgsStorage} from "../../metadata-args/MetadataArgsStorage";
import {ColumnOptions} from "../exports";
import {ColumnMetadataArgs} from "../../metadata-args/ColumnMetadataArgs";

/**
 * This column will store a number - version of the entity.
 * Every time your entity will be persisted, this number will be increased by one -
 * so you can organize visioning and update strategies of your entity.
 */
export function VersionColumn(options?: ColumnOptions): Function {
    return function (object: Object, propertyName: string) {

        getMetadataArgsStorage().columns.push({
            target: object.constructor,
            propertyName: propertyName,
            mode: "version",
            options: options || {}
        } as ColumnMetadataArgs);
    };
}


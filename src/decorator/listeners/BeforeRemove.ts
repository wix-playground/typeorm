import {EventListenerTypes} from "../../metadata/types/EventListenerTypes";
import {EntityListenerMetadataArgs} from "../../metadata-args/EntityListenerMetadataArgs";
import { getMetadataArgsStorage } from "../../metadata-args/MetadataArgsStorage";

/**
 * Calls a method on which this decorator is applied before this entity removal.
 */
export function BeforeRemove() {
    return function (object: Object, propertyName: string) {

        getMetadataArgsStorage().entityListeners.push({
            target: object.constructor,
            propertyName: propertyName,
            type: EventListenerTypes.BEFORE_REMOVE
        } as EntityListenerMetadataArgs);
    };
}
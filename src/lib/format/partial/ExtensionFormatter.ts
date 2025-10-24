import {FieldDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {Utility} from "../../Utility";
import {ExportMap} from "../../ExportMap";
import {FieldTypesFormatter} from "./FieldTypesFormatter";

export namespace ExtensionFormatter {

    export interface IExtensionModel {
        indent: string;
        extensionName: string;
        fieldType: string;
        deprecated: boolean;
    }

    export function format(fileName: string,
                           exportMap: ExportMap,
                           extension: FieldDescriptorProto,
                           indent: string): IExtensionModel {

        let extensionName = Utility.snakeToCamel(extension.getName());
        if (Utility.isReserved(extensionName)) {
            extensionName = `pb_${extensionName}`;
        }

        const fieldType = FieldTypesFormatter.getFieldType(
            extension.getType(), extension.getTypeName().slice(1), fileName, exportMap,
        );

        const deprecated = extension.getOptions()?.getDeprecated() || false;

        return {
            indent,
            extensionName,
            fieldType,
            deprecated,
        };
    }

}

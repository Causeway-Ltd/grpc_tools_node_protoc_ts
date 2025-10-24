import {EnumDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";

export namespace EnumFormatter {

    export interface IEnumVariantModel {
        index: number;
        deprecated: boolean;
    }

    export interface IEnumModel {
        indent: string;
        enumName: string;
        values: { [key: string]: IEnumVariantModel };
        deprecated: boolean;
    }

    export function format(enumDescriptor: EnumDescriptorProto, indent: string): IEnumModel {
        const enumName = enumDescriptor.getName();
        const deprecated = enumDescriptor.getOptions()?.getDeprecated() || false;
        const values: { [key: string]: IEnumVariantModel } = {};
        enumDescriptor.getValueList().forEach((value) => {
            values[value.getName().toUpperCase()] = {
                index: value.getNumber(),
                deprecated: value.getOptions()?.getDeprecated() || false,
            };
        });

        return {
            indent,
            enumName,
            values,
            deprecated,
        };
    }

}

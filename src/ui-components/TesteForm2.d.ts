/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TesteForm2InputValues = {
    Field0?: string;
    Field1?: string;
};
export declare type TesteForm2ValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TesteForm2OverridesProps = {
    TesteForm2Grid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TesteForm2Props = React.PropsWithChildren<{
    overrides?: TesteForm2OverridesProps | undefined | null;
} & {
    onSubmit: (fields: TesteForm2InputValues) => void;
    onChange?: (fields: TesteForm2InputValues) => TesteForm2InputValues;
    onValidate?: TesteForm2ValidationValues;
} & React.CSSProperties>;
export default function TesteForm2(props: TesteForm2Props): React.ReactElement;

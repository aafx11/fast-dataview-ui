declare namespace _default {
    const name: string;
    namespace props {
        const customClass: StringConstructor;
        const sourceCode: StringConstructor;
    }
    function setup(props: any): {
        blockClass: import("vue").ComputedRef<string>;
        hover: import("vue").Ref<boolean>;
        fixedControl: import("vue").Ref<boolean>;
        isExpanded: import("vue").Ref<boolean>;
        locale: import("vue").ComputedRef<any>;
        controlText: import("vue").ComputedRef<any>;
        onClickControl: () => void;
        highlight: import("vue").Ref<null>;
        description: import("vue").Ref<null>;
        meta: import("vue").Ref<null>;
        control: import("vue").Ref<null>;
        onCopy: () => Promise<void>;
        goCodepen: () => void;
        demoBlock: import("vue").Ref<null>;
    };
}
export default _default;

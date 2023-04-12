import MarkdownIt from 'markdown-it';

interface Locale {
    'hide-text': string;
    'show-text': string;
    'copy-button-text': string;
    'copy-success-text': string;
}
interface Locales {
    [key: string]: Locale;
}
type ReplaceValue = () => string;
interface ScriptReplace {
    searchValue: RegExp;
    replaceValue: string | ReplaceValue;
}
interface DemoblockPluginOptions {
    locales?: Locales;
    customClass?: string;
    theme?: string;
    langs?: any[];
    lang?: string;
    cssPreprocessor?: 'sass' | 'scss' | 'less' | 'stylus';
    customStyleTagName?: string;
    scriptImports?: Array<string>;
    scriptReplaces?: Array<ScriptReplace>;
    styleReplaces?: Array<ScriptReplace>;
}

declare const blockPlugin: (md: MarkdownIt, options: DemoblockPluginOptions) => void;
declare const codePlugin: (md: MarkdownIt, options: DemoblockPluginOptions) => void;
declare const renderPlugin: (md: MarkdownIt, options: DemoblockPluginOptions) => void;
declare const demoblock: (md: MarkdownIt, options?: DemoblockPluginOptions) => void;

export { DemoblockPluginOptions, Locale, Locales, ReplaceValue, ScriptReplace, blockPlugin, codePlugin, demoblock as default, demoblock as demoBlockPlugin, demoblock, renderPlugin };

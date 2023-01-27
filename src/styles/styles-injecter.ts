import style from "../assets/styles/styles.scss";

export class StylesInjecter {
    // this is the style element that will be injected into the DOM at script"s start
    public injectInit() {
        if (typeof GM_addStyle === "function") {
            GM_addStyle(style);
        } else {
            console.error("GM_addStyle is not defined");
        }
    }
    public static inject(css: string) {
        GM_addStyle(css);
    }
}
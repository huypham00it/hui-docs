import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { FacebookIcon } from "./components/icons";

const config: DocsThemeConfig = {
    logo: <span>HUI Docs</span>,
    project: {
        link: "https://github.com/huypham00it",
    },
    chat: {
        link: "https://www.facebook.com/groups/zerotomastery",
        icon: <FacebookIcon style={{ width: 25 }} />,
    },
    docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
    footer: {
        text: `Copyright ${new Date().getFullYear()} © HUI Docs`,
    },
};

export default config;

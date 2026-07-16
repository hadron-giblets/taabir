import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration for Taabir Digital Garden
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Taabir",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "hadron-giblets.github.io/taabir",
    ignorePatterns: ["private", "templates", ".obsidian", "_review-progress.md", "SKILL.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "Georgia",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fafaf7",
          lightgray: "#e0ddd5",
          gray: "#b0aca0",
          darkgray: "#4a4a42",
          dark: "#1a2820",
          secondary: "#1a3c2e",
          tertiary: "#4a7c59",
          highlight: "rgba(218, 165, 32, 0.12)",
          textHighlight: "#daa52044",
        },
        darkMode: {
          light: "#0a1410",
          lightgray: "#141f18",
          gray: "#1e2e22",
          darkgray: "#e8e4d8",
          dark: "#f5f0e3",
          secondary: "#d4ad6a",
          tertiary: "#8fc87a",
          highlight: "rgba(232, 184, 66, 0.15)",
          textHighlight: "rgba(232, 184, 66, 0.35)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
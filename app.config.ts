export default defineAppConfig({
  ui: {
    icons: {
      dynamic: true,
    },
    primary: "blue",
    gray: "stone",
    variables: {
      light: {
        background: "var(--color-gray-50)",
      },
      dark: {
        background: "#282828",
      },
    },
    tooltip: {
      default: {
        openDelay: 500,
      },
    },
    button: {
      base: "transition-all",
    },
  },
});

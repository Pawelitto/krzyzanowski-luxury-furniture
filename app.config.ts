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
        background: "var(--color-gray-950)",
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

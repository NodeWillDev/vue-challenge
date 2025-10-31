import { ref } from "vue";

const theme = ref<"light" | "dark">("light");

export function useTheme() {
  const applyTheme = (newTheme: "light" | "dark") => {
    if (typeof document === "undefined") return;

    const htmlElement = document.documentElement;
    if (newTheme === "dark") {
      htmlElement.classList.add("dark-mode");
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.classList.remove("dark-mode");
      htmlElement.setAttribute("data-theme", "light");
    }
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  const loadTheme = () => {
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      theme.value = "light";
      return;
    }

    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      theme.value = savedTheme;
    } else {
      theme.value = "light";
    }
    applyTheme(theme.value);
  };

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    applyTheme(theme.value);
  };

  return {
    theme,
    toggleTheme,
    loadTheme,
  };
}

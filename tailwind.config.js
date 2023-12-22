/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-border":
          "linear-gradient(145.63deg, rgba(255, 255, 255, 0.46) 20.31%, rgba(0, 0, 0, 0) 186.13%)",
        skill_blob:
          "linear-gradient(90deg, #16D9E3 0%, #30C7EC 47.00%, #46AEF7 100%)",
        portfolio_text: "linear-gradient(90deg, #FFF1EB 0%, #ACE0F9 100%)",
      },
      colors: {
        //TEXT CLR
        text_black: "#000000",
        text_white: "#FFFFFF",
        text_blue: "#80C2FF",
        text_gray: "#A5A5AF",
        text_light_gray: "#C5D1E2",
        text_deep_blue: "#1B2C64",
        text_intermidiate_gray: "#D3D9EA",
        text_footer_dark: "#393C46",

        // BTN BG
        btn_blue_border: "#80C2FF",
        btn_primary_bg: "#80C2FF",

        // MISC BG
        circle_avatar_bg: "#3A59FF",
        circle_avatar_underlay_bg: "#80C2FF1F",
        about_card_bg: "#535D70",
        employment_card_bg: "#364257",
        portfolio_main_bg: "#93C0E9",
        footer_social_bg: "#393C46",
        tabbar_bg: "rgba(177, 178, 182, 0.3)",
        tabbar_active_bg: "#6C78E9",

        // BORDER CLR
        border_about_card: "rgba(255, 255, 255, 0.3)",
      },
      zIndex: {
        100: "100",
        90: "90",
        80: "80",
        70: "70",
      },
      boxShadow: {
        avatar_shadow:
          "120.98374938964844px 137.82957458496094px 136.68064880371094px -50.537506103515625px rgba(214, 214, 214, 0.20)",
      },
      animation: {
        glow: "glow 1s infinite alternate",
        circle_rotation: "circle_rotate 10s infinite linear",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 0 0 rgba(128, 194, 255, 0.25)" },
          "100%": { boxShadow: "0 0 0 8px rgba(128, 194, 255, 0)" },
        },
        circle_rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

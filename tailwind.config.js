/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        "gradient-y": "gradient-y 8s ease infinite",
        "gradient-xy": "gradient-xy 8s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      fontFamily: {
        dataNameType: "'Sintony', sans-serif",
        dataValueType: "'Poppins', sans-serif",
        headerType: "'Poppins', sans-serif",
      },
      fontSize: {
        small_dataNameSize: "1.2rem",
        small_dataValueSize: "1.2rem",
        small_titleSize: "1.5rem",

        medium_dataNameSize: "1.8rem",
        medium_dataValueSize: "1.8rem",
        medium_titleSize: "2rem",

        dataNameSize: "2rem",
        dataValueSize: "2rem",
        titleSize: "2rem",
      },
      fontWeight: {
        small_dataNameWeight: "300",
        small_dataValueWeight: "600",
        small_titleWeight: "400",

        dataNameWeight: "500",
        dataValueWeight: "600",
        titleWeight: "400",
      },
      padding: {
        small_dataValuePaddingLeft: "1rem",
        small_dataContainerPadding: "0.5rem",

        dataValuePaddingLeft: "2rem",
        dataContainerPadding: "1rem",
      },
      textColor: {
        dataNameColor: "white",
        dataValueColor: "white",
        titleColor: "white",
      },
      backgroundColor: {
        dataBgColor: "none",
      },
      borderColor: {
        customBorderColor: "white",
      },
    },
  },
  plugins: [],
};

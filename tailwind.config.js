/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // google fonts:
      // poppins: "'Poppins', sans-serif",
      // sintony: "'Sintony', sans-serif",
      fontFamily: {
        dataNameType: "'Sintony', sans-serif",
        dataValueType: "'Poppins', sans-serif",
        headerType: "'Poppins', sans-serif",
      },
      fontSize: {
        // 2rem
        dataNameSize: "1.5rem",
        dataValueSize: "1.5rem",
        titleSize: "2rem",
      },
      fontWeight: {
        // 300, 600, 400
        dataNameWeight: "300",
        dataValueWeight: "600",
        titleWeight: "400",
      },
      padding: {
        // 2rem, 1rem
        dataValuePaddingLeft: "1rem",
        dataContainerPadding: "0.5rem",
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

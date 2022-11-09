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
        dataNameSize: "2rem",
        dataValueSize: "2rem",
        titleSize: "2rem",
      },
      fontWeight: {
        dataNameWeight: "300",
        dataValueWeight: "600",
        titleWeight: "400",
      },
      padding: {
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
    },
  },
  plugins: [],
};

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
        dataNameSize: "1.5rem",
        dataValueSize: "1.3rem",
        titleSize: "2rem",
      },
      fontWeight: {
        dataNameWeight: "800",
        dataValueWeight: "400",
      },
      padding: {
        dataValuePaddingLeft: "1rem",
        dataContainerPadding: "1rem",
      },
      textColor: {
        dataNameColor: "black",
        dataValueColor: "black",
        titleColor: "white",
      },
      backgroundColor: {
        dataBgColor: "white",
      },
    },
  },
  plugins: [],
};

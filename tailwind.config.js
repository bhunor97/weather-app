/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // google fonts:
      // poppins: "'Poppins', sans-serif",
      // sintony: "'Sintony', sans-serif",
      fontFamily: {
        dataNameType: "'Poppins', sans-serif",
        dataValueType: "'Sintony', sans-serif",
      },
      fontSize: {
        dataNameSize: "1.5rem",
        dataValueSize: "1.3rem",
      },
      fontWeight: {
        dataNameWeight: "800",
        dataValueWeight: "500",
      },
      padding: {
        dataValuePaddingLeft: "2rem",
        dataContainerPadding: "1.25rem",
      },
      textColor: {
        dataNameColor: "black",
        dataValueColor: "black",
      },
      backgroundColor: {
        dataBgColor: "white",
      },
    },
  },
  plugins: [],
};

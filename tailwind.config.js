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
        small_dataNameSize: "1.2rem",
        small_dataValueSize: "1.2rem",
        small_titleSize: "1.5rem",

        dataNameSize: "1.8rem",
        dataValueSize: "1.8rem",
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
        small_dataContainerPadding: "1rem",

        dataValuePaddingLeft: "2rem",
        dataContainerPadding: "2rem",
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

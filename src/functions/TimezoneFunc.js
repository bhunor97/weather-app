// MOMENT JS
import moment from "moment";

const timeZoneFunc = (time) => {
  return moment()
    .utcOffset(time / 60)
    .format("hh:mm A");
};

export default timeZoneFunc;

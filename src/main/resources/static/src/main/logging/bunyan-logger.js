import bunyan from "bunyan";
import bformat from "bunyan-format";

const formatOut = bformat({ outputMode: "short" });

class ADCLogger {
  default_options = {};

  constructor(options) {
    this.default_options = {
      name: "ADC-Portal",
      stream: formatOut,
      level: "trace"
    };
    this.getLogger = this.getLogger.bind(this);
  }

  getLogger = (name, level) => {
    let options = {
      name: this.default_options.name,
      stream: this.default_options.stream,
      level: this.default_options.level
    };
    if (name && name.length > 0) {
      options.name = name;
    }
    if (level) options.level = level;
    return bunyan.createLogger(options);
  };
}

const L = new ADCLogger({
  name: "ADC-Portal",
  stream: formatOut,
  level: "trace"
});

export default L;

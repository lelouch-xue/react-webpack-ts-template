const dotenv = require("dotenv");
const path = require("path");

function load(parseEnvObj, prefix = "") {
  const { parsed } = parseEnvObj;
  if (parsed && parsed instanceof Object) {
    Object.getOwnPropertyNames(parsed).forEach((k) => {
      if (k.indexOf(prefix) === 0) {
        process.env[k] = parsed[k];
      } else {
        if (k == "NODE_ENV") return;
        process.env[k] = undefined;
      }
    });
  }
}

function loadEnv(options = {}) {
  const { prefix = "" } = options;
  const baseDir = process.cwd();
  const NODE_ENV = process.env.NODE_ENV;

  // const s1 = dotenv.config({ path: path.resolve(process.cwd(), `env/.env.production`) });
  // const s1 = dotenv.config({ path: path.resolve(process.cwd(), `env/.env.${NODE_ENV}`) });
  // const s1 = dotenv.config({ path: path.resolve(__dirname, `../env/.env.${NODE_ENV}`) });
  // console.log(s1);
  // .env
  load(dotenv.config({ path: path.resolve(__dirname, "../env/.env") }), prefix);

  // .env.local
  load(dotenv.config({ path: path.resolve(__dirname, "../env/.env.local") }), prefix);

  // .env.[mode]
  load(dotenv.config({ path: path.resolve(__dirname, `../env/.env.${NODE_ENV}`) }), prefix);

  // .env.[mode].local
  load(dotenv.config({ path: path.resolve(__dirname, `../env/.env.${NODE_ENV}.local`) }), prefix);
}

// loadEnv({ prefix: "REACT_APP" });
// console.log(process.env);
module.exports = loadEnv;

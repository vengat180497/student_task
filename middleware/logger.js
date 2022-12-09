import { v4 as uuid } from "uuid";
import { format } from "date-fns";
import fs from "fs";
import path from "path";
import fsPromises from "fs/promises";

const __dirname = path.resolve();


export const logEvents = async (message, logFileName) => {
  const dateTime = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    console.log("object1")
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
        console.log("object")
        await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
    }
    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
  } catch (error) {
    console.log(error);
  }
};

export const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
    console.log(`${req.method} ${req.path}`)
    next()
};

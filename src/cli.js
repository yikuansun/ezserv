#!/usr/bin/env node

import LocalServer from "../lib/LocalServer.cjs";
import minimist from "minimist";

let argv = minimist(process.argv.slice(2));
let port = argv["port"] || argv["p"] || 0;
let serv = new LocalServer(port);
serv.dir = process.cwd();
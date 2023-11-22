#!/usr/bin/env node

import LocalServer from "../lib/LocalServer.js";

let serv = new LocalServer();
serv.dir = process.cwd();
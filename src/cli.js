#!/usr/bin/env node

import LocalServer from "../lib/LocalServer.cjs";

let serv = new LocalServer();
serv.dir = process.cwd();
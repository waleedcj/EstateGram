import { startApp } from "./config/app.js";
import debugCreator from "debug";

const debug = debugCreator("index:");

debug("Starting App");
startApp();
debug("App started");

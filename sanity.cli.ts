/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
* 
import dotenv from 'dotenv';

dotenv.config();
**/
import { defineCliConfig } from 'sanity/cli'
import dotenv from 'dotenv';

dotenv.config()

const projectId = "8d4lp96v"
const dataset = "production"
const studioHost = 'divinebuildings'

export default defineCliConfig({ api: { projectId, dataset }, studioHost })

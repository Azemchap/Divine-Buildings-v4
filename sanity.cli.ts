/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
* 
import dotenv from 'dotenv';

dotenv.config();
**/

import * as dotenv from 'dotenv'

import { defineCliConfig } from 'sanity/cli'


dotenv.config()
const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const studioHost = 'divinebuildings'

export default defineCliConfig({ api: { projectId, dataset }, studioHost })

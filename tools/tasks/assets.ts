import { Sparky } from 'fuse-box';
import { config } from '../config';

Sparky.task("assets", () => Sparky.src(`./assets/**/*.*`, { base: `./${config.assetParentDir}` }).dest(`./${config.outputDir}`));
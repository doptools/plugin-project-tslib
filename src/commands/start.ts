import { CliCommand, Shell } from '@doptools/tslib-cli-core';
import Command from '@oclif/command';
@CliCommand({
  description: 'Build the project in watch mode'
})
export default class StartProjectCommand extends Command {

  async run(): Promise<void> {
    Shell.exec(`yarn start`);
  }

}
